import gql from 'graphql-tag.macro';

const GET_ALL_CHARACTERS = gql`
  query AllPeople($after: String!) {
    allPeople(first: $first, after: $after) {
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

// export const GET_ALL_CHARACTERS = gql`
//   query getCharacters($first: Int!, $after: String!) {
//     allPeople(first: $first, after: $after) {
//       pageInfo {
//         hasNextPage
//       }
//       edges {
//         cursor
//         node {
//           id
//           name
//           image
//         }
//       }
//     }
//   }
// `;

export { GET_ALL_CHARACTERS };
