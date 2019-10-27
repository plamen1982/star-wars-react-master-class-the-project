import gql from 'graphql-tag.macro';

const GET_ALL_CHARACTERS = gql`
  query {
    allEpisodes(first: 10) {
      edges {
        node {
          title
          episodeId
          openingCrawl
          director
          releaseDate
          image
        }
      }
    }
  }
`;
export { GET_ALL_CHARACTERS };
