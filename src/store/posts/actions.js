import * as postService from '../../app/home/services/home_service';

export const FETCH_POSTS = 'FETCH_POSTS';

export const FETCH_POSTS_BY_CATEGORY = 'FETCH_POSTS_BY_CATEGORY';

export function fetchPosts() {
  var posts = postService.getPosts();
  return {type: FETCH_POSTS, payload: posts};
}

export function fetchpostsbyCategory(category_id) {
  var posts_list = postService.getCategorylist(category_id);
  return {type: FETCH_POSTS_BY_CATEGORY, payload: posts_list};
}