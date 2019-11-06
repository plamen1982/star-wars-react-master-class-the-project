import gql from 'graphql-tag.macro';

const GET_ALL_CHARACTERS = gql`
  query AllPeople($first: Int!, $after: String) {
    allPeople(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      totalCount
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
          # starships(first: $numberStarships) {
          #   edges {
          #     node {
          #       name
          #     }
          #   }
          # }
        }
      }
    }
  }
`;

export const GET_CHARACTER_DETAILS = gql`
  query getCharacterDetails($id: ID!) {
    person(id: $id) {
      name
      height
      image
      homeworld {
        name
      }
      species {
        name
      }
      starships {
        edges {
          node {
            id
            name
            image
          }
        }
      }
    }
  }
`;
export { GET_ALL_CHARACTERS };
