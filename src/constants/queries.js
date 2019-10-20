const allPeopleQuery = `query { allPeople(first: 10) { edges { node { id, name, height, mass, image, homeworld { name }, species { name }, starships(first: 5) { edges { node { name } } } } } } }`;
const allEpisodes = `query {
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
   }`;
const allStarships = `query {
    allPlanets(first:10){
    edges{
      node{
        id,
        name,
        diameter,
        population
      }
    }
  }
 }`;

export { allPeopleQuery, allEpisodes, allStarships };