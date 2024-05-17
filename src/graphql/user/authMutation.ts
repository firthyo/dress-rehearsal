// src/mutations/authMutations.js

import { gql } from "@apollo/client";

export const REGISTER_USER_MUTATION = gql`
  mutation Register(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $terms: Boolean!
  ) {
    register(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      terms: $terms
    ) {
      success
      message
    }
  }
`;

export const LOGIN_USER_MUTATION = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
    }
  }
`;

export const VERIFY_EMAIL = gql`
  mutation verifyEmail($token: String!) {
    verifyEmail(token: $token) {
      success
      message
      authToken
      firstName
      lastName
    }
  }
`;
