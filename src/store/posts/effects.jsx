import { loadedPosts, loadedPostsByCategory, selectedPost } from './actions';
import HomeService from '../../services/HomeService';

export function fetchPosts() {
  return dispatch => {
    return HomeService.getPosts()
      .then(posts => {
        dispatch(loadedPosts(posts))
      }).catch(error => {
        throw error;
      });
  }
}

export function fetchpostsbyCategory(category_id) {
  return dispatch => {
    return HomeService.getCategorylist(category_id)
      .then(posts => {
        dispatch(loadedPostsByCategory(posts))
      }).catch(error => {
        throw error;
      });
  }
}

export function getSelectedPost(id) {
  return dispatch => {
    return HomeService.getPostById(id)
      .then(post => {
        dispatch(selectedPost(post))
      }).catch(error => {
        throw error;
      });
  }
}

export function getPostListFor(category_id) {
  return dispatch => {
    return HomeService.getPostlistFor(category_id)
      .then(posts => {
        dispatch(loadedPosts(posts))
      }).catch(error => {
        throw error;
      });
  }
}
