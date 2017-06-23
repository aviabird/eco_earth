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
    case 'FETCH_POSTS_BY_CATEGORY':
      return {
        ...state,
        posts: action.payload
      }
    case 'FETCH_SELECTED_POST':
      return {
        posts: [], 
        selected_post: action.payload
      }
    default:
      {
        return state;
      }
  }
}