import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_PROJECT = gql`
  mutation addProject($projectText: String!,$projectName: String!) {
    addProject(projectText: $projectText, projectName: $projectName) {
      _id
      projectText
      projectAuthor
      projectName
      createdAt
      tikkits {
        _id
        tikkitText
      }
    }
  }
`;

export const UPDATE_PROJECT = gql`
mutation addProject($projectText: String!,$projectName: String!) {
  addProject(projectText: $projectText, projectName: $projectName) {
    _id
    projectText
    projectAuthor
    projectName
    updatedAt
    tikkits {
      _id
      tikkitText
    }
  }
}
`;

export const DELETE_PROJECT = gql`
mutation deleteProject($projectText: String!,$projectName: String!) {
  deleteProject(projectText: $projectText, projectName: $projectName) {
    _id
    projectText
    projectAuthor
    projectName
    deletedAt
    tikkits {
      _id
      tikkitText
    }
  }
}
`;



export const ADD_TIKKIT = gql`
  mutation addTikkit($projectId: ID!, $tikkitText: String! ) {
    addTikkit(projectId: $projectId, tikkitText: $tikkitText ) {
      _id
      projectText
      projectAuthor
      createdAt
      tikkits {
        _id
        tikkitText
        createdAt
      }
    }
  }
`;

export const UPDATE_TIKKIT = gql`
  mutation addTikkit($projectId: ID!, $tikkitText: String!) {
    addTikkit(projectId: $projectId, tikkitText: $tikkitText) {
      _id
      projectText
      projectAuthor
      UpdatedAt
      tikkits {
        _id
        tikkitText
        updatedAt
      }
    }
  }
`;

export const DELETE_TIKKIT = gql`
  mutation deleteTikkit($projectId: ID!, $tikkitText: String!) {
    deleteTikkit(projectId: $projectId, tikkitText: $tikkitText) {
      _id
      projectText
      projectAuthor
      createdAt
      tikkits {
        _id
        tikkitText
        deletedAt
      }
    }
  }
`;

