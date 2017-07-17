import * as postsActions from "./actions";
import appServices from "../../../services/Services";
import * as actionTypes from "./actionTypes";

export const fetchPosts = (action$, { getJSON }) => {
  return action$
    .ofType(actionTypes.FETCH_POSTS)
    .switchMap(() => appServices().HOME.getFirebasePosts())
    .map(data => {
      return postsActions.fetchPostsSuccess(data);
    });
};

export const getPostlistFor = (action$, { getJSON }) => {
  return action$
    .ofType(actionTypes.FETCH_POSTS_BY_CATEGORY)
    .map(action => action.payload)
    .switchMap(category_id =>
      appServices().HOME
        .getPostlistFor(category_id)
        .map(postsActions.fetchPostsByCategorySuccess)
    );
};

export const getSelectedPost = (action$, { getJSON }) => {
  return action$
    .ofType(actionTypes.FETCH_SELECTED_POST)
    .map(action => action.payload)
    .switchMap(post_id =>
      appServices().HOME
        .getPostById(post_id)
        .map(postsActions.fetchSelectedPostSuccess)
    );
};

export const newpostCreate = (action$, { getJSON }) => {
  return action$
    .ofType(actionTypes.CREATE_POST)
    .map(action => action.payload)
    .switchMap(post => appServices().HOME.postSubmit(post))
    .map(post => postsActions.newpostCreateSuccess(post));
};

export const postUpdation = (action$, { getJSON }) => {
  return action$
    .ofType(actionTypes.POST_UPDATE)
    .map(action => action.payload)
    .switchMap(post => appServices().HOME.postUpdate(post))
    .map(post => postsActions.postUpdateSuccess(post));
};
