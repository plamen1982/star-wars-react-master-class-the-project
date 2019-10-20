import starships from './starships';
import episodes from './episodes';
import characters from './characters';
import { combineReducers } from 'redux';

export default combineReducers({
  starships,
  episodes,
  characters,
});
