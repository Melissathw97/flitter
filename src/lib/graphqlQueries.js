import gql from 'graphql-tag';

const USER_PROFILE = gql`
  query UserProfileQuery {
    users {
      uid
      id
      email
    }
  }
`

export {
  USER_PROFILE
}