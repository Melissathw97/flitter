import gql from 'graphql-tag';

const UPDATE_USERNAME = gql`
  mutation UpdateUsernameMutation($user_id: Int!, $username: String!) {
    update_users(where: {id: {_eq: $user_id}}, _set: {username: $username}) {
      affected_rows
    }
  }
`

export {
  UPDATE_USERNAME
};