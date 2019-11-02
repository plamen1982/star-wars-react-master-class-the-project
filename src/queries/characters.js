import gql from 'graphql-tag.macro';

const GET_ALL_CHARACTERS = gql`
  query AllPeople(
    $numberPeople: Int!
    $numberStarships: Int!
    $after: String!
  ) {
    allPeople(first: $numberPeople, after: $after) {
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          name
          height
          mass
          image
          homeworld {
            name
          }
          species {
            name
          }
          starships(first: $numberStarships) {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export { GET_ALL_CHARACTERS };
