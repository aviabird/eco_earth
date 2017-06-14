import { combineReducers } from 'redux';
import postsReducer from './posts/reducers';
//import { reducer as formReducer } from 'redux-form';
import categoriesReducer from './categories/reducers';

const rootReducer = combineReducers({
  post_state: postsReducer,
  categories:categoriesReducer
  //form: formReducer
});

export default rootReducer;
