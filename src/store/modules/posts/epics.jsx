import * as postsActions from "./actions";
import HomeService from "../../../services/HomeService";
import * as actionTypes from "./actionTypes";

export const fetchPosts = (action$, { getJSON }) => {
  return action$
    .ofType(actionTypes.FETCH_POSTS)
    .switchMap(() => HomeService.getFirebasePosts())
    .map(data => {
      return postsActions.fetchPostsSuccess(data);
    });
};

export const getPostlistFor = (action$, { getJSON }) => {
  return action$
    .ofType(actionTypes.FETCH_POSTS_BY_CATEGORY)
    .map(action => action.payload)
    .switchMap(category_id =>
      HomeService.getPostlistFor(category_id).map(data =>
        {
         return postsActions.fetchPostsByCategorySuccess(data);
        }
      )
    );
};

export const getSelectedPost = (action$, { getJSON }) => {
  return action$
    .ofType(actionTypes.FETCH_SELECTED_POST)
    .map(action => action.payload)
    .switchMap(post_id =>
      HomeService.getPostById(post_id).map(
        postsActions.fetchSelectedPostSuccess
      )
    );
};

export const newpostCreate = (action$, { getJSON }) => {
  return action$
    .ofType(actionTypes.CREATE_POST)
    .map(action => action.payload)
    .switchMap(post => HomeService.postSubmit(post))
    .map(post => postsActions.newpostCreateSuccess(post));
};

export const postUpdation = (action$, { getJSON }) => {
  return action$
    .ofType(actionTypes.POST_UPDATE)
    .map(action => action.payload)
    .switchMap(post => HomeService.postUpdate(post))
    .map(post => postsActions.postUpdateSuccess(post));
};
