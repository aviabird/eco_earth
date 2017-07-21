import posts_reducer from "./reducer.jsx";
import {
  FETCH_POSTS_SUCCESS,
  FETCH_SELECTED_POST_SUCCESS,
  FETCH_POSTS_BY_CATEGORY_SUCCESS,
  CREATE_POST_SUCCESS,
  POST_UPDATE_SUCCESS,
  DELETE_SELECTED_POST
} from "./actionTypes";

describe("fetchposts reducer", () => {
  const INITIAL_STATE = {
    postids: [],
    posts: {},
    selected_post: {},
    isFetchingPosts: false,
    isFetchingSinglePost: false,
    formloaded: false
  };
  var state = INITIAL_STATE;
  it("updates posts state on passing payload", () => {
    var action = {
      type: FETCH_POSTS_SUCCESS,
      payload: {
        1: {
          id: 1,
          title: "Save energy",
          category_id: 1,
          content:
            "Turn off lights when I leave a room and use natural lighting as much as possible"
        },
        2: {
          id: 2,
          title: "Say no to plastics",
          category_id: 2,
          content: "Use less and compost and recycle as much as possible"
        }
      }
    };
    expect(posts_reducer(state, action)).toEqual({
      isFetchingPosts: false,
      posts: action.payload,
      postids: Object.keys(action.payload),
      selected_post: {},
      isFetchingSinglePost: false,
      formloaded: false
    });
  });
  it("updates post reducer on selecting a category", () => {
    var action = {
      type: FETCH_POSTS_BY_CATEGORY_SUCCESS,
      payload: {
        1: {
          id: 1,
          title: "Save energy",
          category_id: 1,
          content:
            "Turn off lights when I leave a room and use natural lighting as much as possible"
        }
      }
    };
    expect(posts_reducer(state, action)).toEqual({
      isFetchingPosts: false,
      posts: action.payload,
      postids: [],
      selected_post: {},
      isFetchingSinglePost: false,
      formloaded: false
    });
  });
  it("updates post reducer on selecting a post", () => {
    var action = {
      type: FETCH_SELECTED_POST_SUCCESS,
      payload: {
        1: {
          id: 1,
          title: "Save energy",
          category_id: 1,
          content:
            "Turn off lights when I leave a room and use natural lighting as much as possible"
        }
      }
    };
    expect(posts_reducer(state, action)).toEqual({
       ...state,
        selected_post: action.payload,
        isFetchingSinglePost: false
    });
  });
  it("updates post reducer on creating a post", () => {
    var action = {
      type: CREATE_POST_SUCCESS,
      payload: {
        1: {
          id: 1,
          title: "Save energy",
          category_id: 1,
          content:
            "Turn off lights when I leave a room and use natural lighting as much as possible"
        }
      }
    };
    expect(posts_reducer(state, action)).toEqual({
      ...state, formloaded: true
    });
  });
   it("updates post reducer on updating a post", () => {
    var action = {
      type: POST_UPDATE_SUCCESS,
      payload: {
        1: {
          id: 1,
          title: "Save energy",
          category_id: 1,
          content:
            "Turn off lights when I leave a room and use natural lighting as much as possible"
        }
      }
    };
    expect(posts_reducer(state, action)).toEqual({
      ...state,posts: action.payload,formloaded: true
    });
  });
   it("updates post reducer on updating a post", () => {
    var action = {
      type: DELETE_SELECTED_POST,
      payload: {
        1: {
          id: 1,
          title: "Save energy",
          category_id: 1,
          content:
            "Turn off lights when I leave a room and use natural lighting as much as possible"
        }
      }
    };
    expect(posts_reducer(state, action)).toEqual({
      ...state,posts: action.payload
    });
  });
});
