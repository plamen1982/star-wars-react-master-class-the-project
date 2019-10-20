import axios from 'axios';
import {
  GET_ALL_CHARACTERS,
  GET_ALL_EPISODES,
  GET_ALL_STARSHIPS,
} from './actionTypes';
const getAllCharacters = () => async dispatch => {
  const data = await axios.get(`http://localhost:4200/allPeople`);
  const action = {
    type: GET_ALL_CHARACTERS,
    data,
  };
  dispatch(action);
};

const getAllStarships = () => async dispatch => {
  const data = await axios.get(`http://localhost:4200/allStarships`);
  const action = {
    type: GET_ALL_STARSHIPS,
    data,
  };
  dispatch(action);
};

const getAllEpisodes = () => async dispatch => {
  const data = await axios.get(`http://localhost:4200/allEpisodes`);
  const action = {
    type: GET_ALL_EPISODES,
    data,
  };
  dispatch(action);
};

export { getAllCharacters, getAllStarships, getAllEpisodes };
