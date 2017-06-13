import * as postService  from '../../app/home/services/home_service';

export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts() {
  var posts = postService.getPosts();
  return {type: FETCH_POSTS, payload: posts};
}