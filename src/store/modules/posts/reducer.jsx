import * as actionTypes from './actionTypes';

//reducers are always functions
const INITIAL_STATE = {
  posts: [],
  selected_post: {}
};

export default function (state = INITIAL_STATE, action) { //action coming from actioncontainers

  switch (action.type) {
    case actionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload
      }
    case actionTypes.FETCH_POSTS_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        posts: action.payload
      }
    case actionTypes.FETCH_SELECTED_POST_SUCCESS:
      return {
        selected_post: action.payload
      }
    default:
      {
        return state;
      }
  }
}