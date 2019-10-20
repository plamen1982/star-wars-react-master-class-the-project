import { baseUrl } from '../../constants/url-releted';
import {
  GET_ALL_CHARACTERS,
  GET_ALL_EPISODES,
  GET_ALL_STARSHIPS,
} from './actionTypes';
import { post } from '../../api/requester';
import {
  allPeopleQuery,
  allEpisodes,
  allStarships,
} from '../../constants/queries';

const getAllCharacters = () => async dispatch => {
  const config = {
    query: allPeopleQuery,
  };
  const data = await post(baseUrl, config);
  debugger;
  const action = {
    type: GET_ALL_CHARACTERS,
    data,
  };
  dispatch(action);
};

const getAllStarships = () => async dispatch => {
  const config = {
    query: allStarships,
  };
  const data = await post(baseUrl, config);
  const action = {
    type: GET_ALL_STARSHIPS,
    data,
  };
  dispatch(action);
};

const getAllEpisodes = history => async dispatch => {
  const config = {
    query: allEpisodes,
  };
  try {
    const data = await post(baseUrl, config);
    const action = {
      type: GET_ALL_EPISODES,
      data,
    };
    dispatch(action);
  } catch (e) {
    history.push('/');
  }
};

export { getAllCharacters, getAllStarships, getAllEpisodes };
