import { FETCH_POSTS, FETCH_POSTS_BY_CATEGORY } from './actionTypes';

export function loadedPosts(posts) {
  return { type: FETCH_POSTS, payload: posts };
}

export function loadedPostsByCategory(posts) {
  return { type: FETCH_POSTS_BY_CATEGORY, payload: posts };
}

export function selectedPost(post) {
  return { type: 'FETCH_SELECTED_POST', payload: post };
}
