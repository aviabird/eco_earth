import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
//import firebase from "firebase";
import postsReducer from "./posts/reducer";
import categoriesReducer from "./categories/reducer";
import * as postEpics from "./posts/epics";
import * as categoryEpics from "./categories/epics";

//import { ajax } from 'rxjs/observable/dom/ajax';
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/finally";
import "rxjs/add/observable/of";
import "rxjs/add/observable/fromPromise";

export const rootEpic = (...args) =>
  combineEpics(
    postEpics.fetchPosts,
    postEpics.getPostlistFor,
    postEpics.getSelectedPost,
    categoryEpics.FetchCategories,
    categoryEpics.newCategoryCreate,
    categoryEpics.getSelectedCategory,
    categoryEpics.categoryUpdation,
    postEpics.newpostCreate,
    postEpics.postUpdation,
    categoryEpics.FetchCategories
  )(...args);

/*
const epicMiddleware = createEpicMiddleware(rootEpic, {
  dependencies: { getJSON: ajax.getJSON }
})
*/

// const epicMiddleware = createEpicMiddleware(rootEpic, {
//   dependencies: { getJSON: ajax.getJSON ,firebase}
// })

export const rootReducer = combineReducers({
  postsState: postsReducer,
  categoriesState: categoriesReducer
});
