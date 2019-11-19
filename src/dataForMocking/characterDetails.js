const characterDetails = {
  data: {
    person: {
      name: 'Luke Skywalker',
      height: 172,
      image:
        'https://links.gunaxin.com/content/images/post_images/Luke_Skywalker_039_s_Original_039_Star_Wars_039_Lightsaber_Is_Going_Up_For_Auction_1544116268_4528.jpg',
      mass: 77,
      homeworld: {
        name: 'Tatooine',
        __typename: 'Planet',
      },
      species: {
        name: 'Human',
        __typename: 'Species',
      },
      starships: {
        edges: [
          {
            node: {
              id: 'starships.12',
              name: 'X-wing',
              image:
                'https://static.turbosquid.com/Preview/2015/10/14__02_29_23/xwingtopleft_01_open_01.jpgb5dc9c7c-25bc-44f8-88ba-50e41873111aOriginal.jpg',
              __typename: 'Starship',
            },
            __typename: 'StarshipEdge',
          },
          {
            node: {
              id: 'starships.22',
              name: 'Imperial shuttle',
              image:
                'http://dimmerlightstudios.com/wp-content/uploads/2017/08/star-wars-imperial-shuttle-front-shaded_on-white-folded.jpg',
              __typename: 'Starship',
            },
            __typename: 'StarshipEdge',
          },
        ],
        __typename: 'StarshipsConnection',
      },
      __typename: 'Person',
    },
  },
};

export default characterDetails;
