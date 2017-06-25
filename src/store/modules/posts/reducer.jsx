import * as actionTypes from './actionTypes';

//reducers are always functions
const INITIAL_STATE = {
  posts: [],
  selected_post: {},
  isFetchingPosts: false,
  isFetchingSinglePost: false
};

export default function (state = INITIAL_STATE, action) { //action coming from actioncontainers

  switch (action.type) {
    case actionTypes.FETCH_POSTS:
      return { ...state, isFetchingPosts: true }
    case actionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        isFetchingPosts: false
      }
    case actionTypes.FETCH_POSTS_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        isFetchingPosts: false
      }
    case actionTypes.FETCH_SELECTED_POST:
      return { ...state, isFetchingSinglePost: true }
    case actionTypes.FETCH_SELECTED_POST_SUCCESS:
      return {
        selected_post: action.payload,
        isFetchingSinglePost: false
      }
    default:
      {
        return state;
      }
  }
}