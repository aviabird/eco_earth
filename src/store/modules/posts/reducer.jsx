import * as actionTypes from "./actionTypes";

//reducers are always functions
const INITIAL_STATE = {
  postids:[],
  posts: {},
  selected_post: {},
  isFetchingPosts: false,
  isFetchingSinglePost: false,
  formloaded: false
};

export default function(state = INITIAL_STATE, action) {
  //action coming from actioncontainers

  switch (action.type) {
    case actionTypes.FETCH_POSTS:
      return { ...state, isFetchingPosts: true };
    case actionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        postids:Object.keys(action.payload),
        posts: action.payload,
       // postentities:posts.reduce()
        isFetchingPosts: false
      };
    case actionTypes.FETCH_POSTS_BY_CATEGORY:
      return { ...state, isFetchingPosts: true };
    case actionTypes.FETCH_POSTS_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        isFetchingPosts: false
      };
    case actionTypes.FETCH_SELECTED_POST:
      return { ...state, isFetchingSinglePost: true };
    case actionTypes.FETCH_SELECTED_POST_SUCCESS:
      return {
        ...state,
        selected_post: action.payload,
        isFetchingSinglePost: false
      };
    case actionTypes.CREATE_POST:
      return { ...state };
    case actionTypes.CREATE_POST_SUCCESS:
      return { ...state, formloaded: true };
    case actionTypes.POST_UPDATE:
      return { ...state };
    case actionTypes.POST_UPDATE_SUCCESS:
      return { ...state,posts: action.payload  };
    case actionTypes.DELETE_SELECTED_POST:
      return { ...state, posts: action.payload };
    default: {
      return state;
    }
  }
}
