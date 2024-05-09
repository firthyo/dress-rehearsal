// src/mutations/authMutations.js

import { gql } from "@apollo/client";

export const REGISTER_USER_MUTATION = gql`
  mutation RegisterUser($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      id
      email
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
