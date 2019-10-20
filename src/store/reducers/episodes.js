import { GET_ALL_EPISODES } from '../actions/actionTypes';
const initialState = [];

const episodes = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_EPISODES:
      return [...state, ...action.data.data.allEpisodes.edges];
    default:
      return state;
  }
};

export default episodes;
