import {  createEpicMiddleware,combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import postsReducer from './posts/reducer';
import categoriesReducer from './categories/reducer';
import * as postEpics from './posts/epics';
import * as categoryEpics from './categories/epics';

export const rootEpic = (...args) => combineEpics(
  postEpics.fetchPosts,
  postEpics.getPostlistFor,
  postEpics.getSelectedPost,
  categoryEpics.FetchCategories,
  categoryEpics.newCategoryCreate,
  categoryEpics.getSelectedCategory,
  categoryEpics.categoryUpdation
)(...args);



/*
const epicMiddleware = createEpicMiddleware(rootEpic, {
  dependencies: { getJSON: ajax.getJSON }
})
*/

export const rootReducer = combineReducers({
  postsState: postsReducer,
  categoriesState: categoriesReducer
});


