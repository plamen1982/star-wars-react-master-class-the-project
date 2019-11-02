import gql from 'graphql-tag.macro';

export const GET_ALL_EPISODES = gql`
  query AllEpisodes($first: Int!, $numberPeople: Int) {
    allEpisodes(first: $first) {
      edges {
        node {
          id
          title
          episodeId
          openingCrawl
          director
          releaseDate
          image
          people(first: $numberPeople) {
            edges {
              node {
                name
                image
              }
              cursor
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
      totalCount
    }
  }
`;

export const GET_EPISODE_BY_ID = gql`
  query Episode($id: ID!, $first: Int, $after: String) {
    episode(id: $id) {
      id
      title
      openingCrawl
      director
      releaseDate
      image
      people(first: $first, after: $after) {
        edges {
          cursor
          node {
            name
            image
          }
        }
      }
    }
  }
`;
