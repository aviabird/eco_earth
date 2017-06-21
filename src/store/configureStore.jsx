import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import postsReducer from './posts/reducer';
import categoriesReducer from './categories/reducer';

const rootReducer = combineReducers({
  post_state: postsReducer,
  categories: categoriesReducer
});


export default function configureStore() {
  return createStore(
    rootReducer,
    {},
    applyMiddleware(thunk)
  );
}
