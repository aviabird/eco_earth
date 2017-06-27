import {  createEpicMiddleware,combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import postsReducer from './posts/reducer';
import categoriesReducer from './categories/reducer';
import * as postEpics from './posts/epics';
import * as categoryEpics from './categories/epics';
import { ajax } from 'rxjs/observable/dom/ajax';


export const rootEpic = (...args) => combineEpics(
  postEpics.fetchPosts,
  postEpics.getPostlistFor,
  postEpics.getSelectedPost,
  categoryEpics.FetchCategories
)(...args, {getJSON});

const epicMiddleware = createEpicMiddleware(rootEpic, {
  dependencies: { getJSON: ajax.getJSON }
})

export const rootReducer = combineReducers({
  postsState: postsReducer,
  categoriesState: categoriesReducer
});