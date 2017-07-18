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

export function fetchPostsByCategory(category_id) {
  return {
    type: actionTypes.FETCH_POSTS_BY_CATEGORY,
    payload: category_id
  };
}

export function fetchPostsByCategorySuccess(posts) {
  return {
    type: actionTypes.FETCH_POSTS_BY_CATEGORY_SUCCESS,
    payload: posts
  };
}

export function selectedPost(post_id) {
  return {
    type: actionTypes.FETCH_SELECTED_POST,
    payload: post_id
  };
}

export function fetchSelectedPostSuccess(post) {
  return {
    type: actionTypes.FETCH_SELECTED_POST_SUCCESS,
    payload: post
  };
}
