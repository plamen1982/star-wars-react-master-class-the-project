import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
const initialState = {
  characters: [],
  starships: [],
  episodes: [],
};
const store = createStore(rootReducer, initialState, allStoreEnhancers);
export default store;
