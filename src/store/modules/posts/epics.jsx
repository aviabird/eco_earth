import * as postsActions from './actions';
import HomeService from '../../../services/HomeService';
import * as actionTypes from './actionTypes';

export const fetchPosts = (action$,{ getJSON }) => {
  return action$.ofType(actionTypes.FETCH_POSTS)
    .switchMap(() =>
      HomeService.getPosts()
      .map(postsActions.fetchPostsSuccess)
    )
}

export const  getPostlistFor = (action$,{ getJSON }) => {
  return action$.ofType(actionTypes.FETCH_POSTS_BY_CATEGORY)
    .map(action => action.payload)
    .switchMap((category_id) =>
      HomeService.getPostlistFor(category_id)
      .map(postsActions.fetchPostsByCategorySuccess)
    )
}


export const getSelectedPost = (action$,{ getJSON } ) => {
  return action$.ofType(actionTypes.FETCH_SELECTED_POST)
    .map( action => action.payload)
    .switchMap((post_id) =>
      HomeService.getPostById(post_id)
      .map(postsActions.fetchSelectedPostSuccess)
    )
}
