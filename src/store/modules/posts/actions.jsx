import * as actionTypes from './actionTypes';

import database from "../../../index.js";

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

export function newpostCreate(props) {
  return {
    type: actionTypes.CREATE_POST,
    payload: props
  };
}
export function newpostCreateSuccess(props) {
  return {
    type: actionTypes.CREATE_POST_SUCCESS,
    payload: props
  };
}

export function deletePost(post_id) {
  const request = database.ref(`/posts/${post_id}`).remove();
  return {
    type: actionTypes.DELETE_SELECTED_POST,
    payload: request
  };
}

