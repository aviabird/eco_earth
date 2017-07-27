import * as postsActions from "./actions";
import appServices from "../../../services/Services";
import AdminService from "../../../app/admin/services/AdminService";
import * as actionTypes from "./actionTypes";

export const fetchPosts = (action$, { getJSON }) => {
  return action$
    .ofType(actionTypes.FETCH_POSTS)
    .switchMap(() => appServices().HOME.getPosts())
    .map(data => {
      return postsActions.fetchPostsSuccess(data);
    });
};

export const getPostlistFor = (action$, { getJSON }) => {
  return action$
    .ofType(actionTypes.FETCH_POSTS_BY_CATEGORY)
    .map(action => action.payload)
    .switchMap(category_id => appServices().HOME.getPostlistFor(category_id))
    .map(data => {
      return postsActions.fetchPostsByCategorySuccess(data || {});
    });
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

export const postApproval = (action$, { getJSON }) => {
  return action$
    .ofType(actionTypes.APPROVE_POST)
    .map(action => action.payload)
    .switchMap(postid => AdminService.postApproval(postid))
    .map(post => postsActions.approvePostSuccess(post));
};

export const postRejection = (action$, { getJSON }) => {
  return action$
    .ofType(actionTypes.REJECT_POST)
    .map(action => action.payload)
    .switchMap(post => AdminService.postRejection(post))
    .map(post => postsActions.rejectPostSuccess(post));
};
