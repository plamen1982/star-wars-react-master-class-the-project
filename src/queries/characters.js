import gql from 'graphql-tag.macro';

const GET_ALL_CHARACTERS = gql`
  query {
    allPeople(first: 10) {
      edges {
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
          starships(first: 5) {
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
