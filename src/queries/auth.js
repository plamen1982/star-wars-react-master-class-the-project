import gql from 'graphql-tag.macro';

const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
    }
  }
`;
export { SIGN_IN };
