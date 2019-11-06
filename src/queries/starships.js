import gql from 'graphql-tag.macro';

const GET_STARSHIP_BY_ID = gql`
  query getStarshipById($id: ID!) {
    starship(id: $id) {
      name
      image
      starshipClass
      cost
      crew
      maxAtmosphericSpeed
      hyperdriveRating
      maxMLPerHour
    }
  }
`;

export { GET_STARSHIP_BY_ID };
