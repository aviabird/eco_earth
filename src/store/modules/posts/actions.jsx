import * as actionTypes from './actionTypes';

export function fetchPosts() {
  return {
    type: actionTypes.FETCH_POSTS
  }
}

export function fetchPostsSuccess(posts) {
  return {
    type: actionTypes.FETCH_POSTS_SUCCESS,
    payload: posts
  };
}

export function loadedPostsByCategory(posts) {
  return {
    type: actionTypes.FETCH_POSTS_BY_CATEGORY,
    payload: posts
  };
}

export function selectedPost(post) {
  return {
    type: actionTypes.FETCH_SELECTED_POST_SUCCESS,
    payload: post
  };
}
