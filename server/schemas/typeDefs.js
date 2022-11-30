const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar Date

  type User {
    _id: ID
    username: String
    email: String
    password: String
    profilePic: String
    projects: [Project]!
    tikkits: [Tikkit]!
  }

  type Project {
    _id: ID
    projectText: String
    projectAuthor: String
    projectName: String
    teamMember: [User]
    createdAt: String
    tikkits: [Tikkit]!
  }

  type Tikkit {
    _id: ID
    tikkitText: String
    tikkitAssignee: [User]
    tikkitAuthor: String
    reviewedBy: String
    completeReview: Boolean
    createdAt: String
    dueDate: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    projects(username: String): [Project]
    project(projectId: ID!): Project
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addProject(projectText: String!, projectName: String): Project
    addTikkit(projectId: ID!, tikkitText: String!): Project
    updateProject(projectId: ID!): Project
    updateTikkit(projectId: ID!, tikkitText: String!, dueDate: String!): Project
    removeProject(projectId: ID!): Project
    removeTikkit(projectId: ID!, tikkitId: ID!): Project
  }
`;

module.exports = typeDefs; 