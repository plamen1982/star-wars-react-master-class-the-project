import { GET_ALL_STARSHIPS } from '../actions/actionTypes';
const initialState = [];

const starships = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_STARSHIPS:
      return [...state, ...action.data];
    default:
      return state;
  }
};

export default starships;
