const { AuthenticationError } = require('apollo-server-express');
const { User, Project } = require('../models');
// const Projects = require('../models/Projects');
const { signToken } = require('../utils/auth');
const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

const resolvers = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
        return new Date(value); // value from the client
    },
    serialize(value) {
        return value.getTime(); // value sent to the client
    },
    parseLiteral(ast) {
        if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
        }
        return null;
    },
  }),
  Query: {
    users: async () => {
      return User.find().populate('projects');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('projects');
    },
    projects: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Project.find(params).sort({ createdAt: -1 });
    },
    project: async (parent, { projectId }) => {
      return Project.findOne({ _id: projectId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('projects');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addProject: async (parent, { projectText, projectName }, context) => {
      // if (context.user) {
        const project = await Project.create({
          projectText,
          projectName,
          projectAuthor: "username",
        });

        // await User.findOneAndUpdate(
        //   { _id: context.user._id },
        //   { $addToSet: { projects: project._id } }
        // );

        return project;
      // }
      throw new AuthenticationError('You need to be logged in!');
    },
    addTikkit: async (parent, { projectId, tikkitText }, context) => {
      if (context.user) {
        return Project.findOneAndUpdate(
          { _id: projectId },
          {
            $addToSet: {
              tikkits: { tikkitText, tikkitAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    updateProject: async (parent, { projectId }, context) => {
      // if (context.user) {
        const project = await Project.findOneAndUpdate({
          _id: projectId,
          projectAuthor: "username",
        });

        // await User.findOneAndUpdate(
        //   { _id: context.user._id },
        //   { $push: { projects: project._id } }
        // );

        return project;
      // }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeProject: async (parent, { projectId }, context) => {
      // if (context.user) {
        const project = await Project.findOneAndDelete({
          _id: projectId,
          projectAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { projects: project._id } }
        );

        return project;
      // }
      throw new AuthenticationError('You need to be logged in!');
    },
    updateTikkit: async (parent, { projectId }, context) => {
      // if (context.user) {
        const project = await Project.findOneAndUpdate({
          _id: projectId,
          projectAuthor: "username",
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { projects: project._id } }
        );

        return project;
      // }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeTikkit: async (parent, { projectId, tikkitId }, context) => {
      // if (context.user) {
        return Project.findOneAndDelete(
          { _id: projectId },
          {
            $pull: {
              tikkits: {
                _id: tikkitId,
                tikkitAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      // }
      throw new AuthenticationError('You need to be logged in!');
    },

  },
};

module.exports = resolvers;