import posts_reducer from './reducer.jsx';
import {FETCH_POSTS, FETCH_SELECTED_POST, FETCH_POSTS_BY_CATEGORY} from './actionTypes';

describe('fetchposts reducer', () => {
  const INITIAL_STATE = {
    posts: [],
    selected_post: {}
  };
  var state = INITIAL_STATE;
  it('updates posts state on passing payload', () => {
    var action = {
      type: FETCH_POSTS,
      payload: [
        {
          id: 1,
          title: 'Save energy',
          category_id: 1,
          content: 'Turn off lights when I leave a room and use natural lighting as much as possible'
        }, {
          id: 2,
          title: 'Say no to plastics',
          category_id: 2,
          content: 'Use less and compost and recycle as much as possible'
        }
      ]
    };
    expect(posts_reducer(state, action)).toEqual({posts: action.payload, selected_post: {}})
  });
  it('updates post reducer on selecting a category', () => {
    var action = {
      type:FETCH_POSTS_BY_CATEGORY,
      payload: [
        {
          id: 1,
          title: 'Save energy',
          category_id: 1,
          content: 'Turn off lights when I leave a room and use natural lighting as much as possible'
        }
      ]
    };
    expect(posts_reducer(state, action)).toEqual({ posts:action.payload,selected_post: {}})
  });
  it('updates post reducer on selecting a post', () => {
    var action = {
      type: FETCH_SELECTED_POST,
      payload: [
        {
          id: 1,
          title: 'Save energy',
          category_id: 1,
          content: 'Turn off lights when I leave a room and use natural lighting as much as possible'
        }
      ]
    };
    expect(posts_reducer(state, action)).toEqual({ selected_post:action.payload })
  });
});