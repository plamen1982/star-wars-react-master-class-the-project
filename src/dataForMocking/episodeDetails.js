const episodeDetails = {
  data: {
    episode: {
      id: 'films.1',
      title: 'A New Hope',
      openingCrawl:
        "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
      director: 'George Lucas',
      releaseDate: '1977-05-25',
      image: 'https://m.media-amazon.com/images/I/81r+LN-YReL._SS500_.jpg',
      people: {
        edges: [
          {
            cursor: 'Y3Vyc29yLnBlb3BsZS4x',
            node: {
              id: 'people.1',
              name: 'Luke Skywalker',
              image:
                'https://links.gunaxin.com/content/images/post_images/Luke_Skywalker_039_s_Original_039_Star_Wars_039_Lightsaber_Is_Going_Up_For_Auction_1544116268_4528.jpg',
              __typename: 'Person',
            },
            __typename: 'PersonEdge',
          },
          {
            cursor: 'Y3Vyc29yLnBlb3BsZS4xMA==',
            node: {
              id: 'people.10',
              name: 'Obi-Wan Kenobi',
              image:
                'https://fsmedia.imgix.net/eb/d1/19/f1/9a64/4b2d/8471/d02314b53684/obi-wan-kenobi-in-the-original-star-wars.jpeg?crop=edges&fit=crop&auto=compress&h=1200&w=1200',
              __typename: 'Person',
            },
            __typename: 'PersonEdge',
          },
          {
            cursor: 'Y3Vyc29yLnBlb3BsZS4xMg==',
            node: {
              id: 'people.12',
              name: 'Wilhuff Tarkin',
              image:
                'https://vignette.wikia.nocookie.net/headhuntersholosuite/images/1/16/Wilhuff_Tarkin_003.jpg/revision/latest?cb=20100317214033',
              __typename: 'Person',
            },
            __typename: 'PersonEdge',
          },
          {
            cursor: 'Y3Vyc29yLnBlb3BsZS4xMw==',
            node: {
              id: 'people.13',
              name: 'Chewbacca',
              image:
                'https://cdn-s3.touchofmodern.com/products/000/618/953/7d97f903a587c703cfa91bfd35527975_large.jpg?1485457758',
              __typename: 'Person',
            },
            __typename: 'PersonEdge',
          },
          {
            cursor: 'Y3Vyc29yLnBlb3BsZS4xNA==',
            node: {
              id: 'people.14',
              name: 'Han Solo',
              image:
                'https://i.pinimg.com/originals/19/37/95/19379598fbb4338dd02e7ea8dde3ad63.jpg',
              __typename: 'Person',
            },
            __typename: 'PersonEdge',
          },
        ],
        pageInfo: {
          hasNextPage: true,
          endCursor: 'Y3Vyc29yLnBlb3BsZS4xNA==',
          __typename: 'PageInfo',
        },
        totalCount: 18,
        __typename: 'PeopleConnection',
      },
      __typename: 'Episode',
    },
  },
};
export default episodeDetails;
