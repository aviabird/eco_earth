import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import postsReducer from './posts/reducer';
// import categories from './categories/reducer';
import { fetchPosts } from './posts/epics';

export const rootEpic = combineEpics(
  fetchPosts
);

export const rootReducer = combineReducers({
  postsState: postsReducer
});