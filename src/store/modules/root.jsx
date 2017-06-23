import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import postsReducer from './posts/reducer';
import categoriesReducer from './categories/reducer';
import * as postEpics from './posts/epics';
import * as categoryEpics from './categories/epics';

export const rootEpic = combineEpics(
  postEpics.fetchPosts,
  postEpics.getPostlistFor,
  categoryEpics.fetchCategories
);

export const rootReducer = combineReducers({
  postsState: postsReducer,
  categoriesState: categoriesReducer
});