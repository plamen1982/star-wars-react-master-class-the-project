import { GET_ALL_CHARACTERS } from '../actions/actionTypes';
const initialState = [];

const characters = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CHARACTERS:
      return [...state, ...action.data.data];
    default:
      return state;
  }
};

export default characters;
