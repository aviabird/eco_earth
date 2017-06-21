import { combineReducers } from 'redux';
import postsReducer from './posts/reducer';
import categoriesReducer from './categories/reducer';

const rootReducer = combineReducers({
  post_state: postsReducer,
  categories: categoriesReducer
});

export default rootReducer;