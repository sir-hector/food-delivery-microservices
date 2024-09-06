"use client";

import { gql, DocumentNode } from "@apollo/client";

export const LOGIN_USER: DocumentNode = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        name
        email
      }
      accessToken
      refreshToken
      error {
        message
      }
    }
  }
`;
