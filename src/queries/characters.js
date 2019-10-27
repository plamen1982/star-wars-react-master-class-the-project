import gql from 'graphql-tag.macro';

const GET_ALL_CHARACTERS = gql`
  query AllPeople($numberPeople: Int!, $numberStarships: Int!) {
    allPeople(first: $numberPeople) {
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
          starships(first: $numberStarships) {
            edges {
              node {
                name
              }
            }
          }
        }
        cursor
      }
    }
  }
`;
export { GET_ALL_CHARACTERS };
