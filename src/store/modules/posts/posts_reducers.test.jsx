import posts_reducer from "./reducer.jsx";
import {
  FETCH_POSTS_SUCCESS,
  FETCH_SELECTED_POST_SUCCESS,
  FETCH_POSTS_BY_CATEGORY_SUCCESS
} from "./actionTypes";


describe("fetchposts reducer", () => {
  const INITIAL_STATE = {
    posts: [],
    selected_post: {}
  };
  var state = INITIAL_STATE;
  it("updates posts state on passing payload", () => {
    var action = {
      type: FETCH_POSTS_SUCCESS,
      payload: [{isFetchingPosts: false},
        {
          id: 1,
          title: "Save energy",
          category_id: 1,
          content:
            "Turn off lights when I leave a room and use natural lighting as much as possible"
        },
        {
          id: 2,
          title: "Say no to plastics",
          category_id: 2,
          content: "Use less and compost and recycle as much as possible"
        }
      ]
    };
    expect(posts_reducer(state, action)).toEqual({
      isFetchingPosts:false,
      posts: action.payload,
      selected_post: {}
    });
  });
  it("updates post reducer on selecting a category", () => {
    var action = {
      type: FETCH_POSTS_BY_CATEGORY_SUCCESS,
      payload: [
        {
          id: 1,
          title: "Save energy",
          category_id: 1,
          content:
            "Turn off lights when I leave a room and use natural lighting as much as possible"
        }
      ]
    };
    expect(posts_reducer(state, action)).toEqual({
      isFetchingPosts:false,
      posts: action.payload,
      selected_post: {}
    });
  });
  it("updates post reducer on selecting a post", () => {
    var action = {
      type: FETCH_SELECTED_POST_SUCCESS,
      payload: [
        { isFetchingPosts: false },
        {
          id: 1,
          title: "Save energy",
          category_id: 1,
          content:
            "Turn off lights when I leave a room and use natural lighting as much as possible"
        }
      ]
    };
    expect(posts_reducer(state, action)).toEqual({
      isFetchingSinglePost:false,
      selected_post: action.payload
    });
  });
});
