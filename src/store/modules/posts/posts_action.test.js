import {loadedPosts, loadedPostsByCategory, selectedPost} from './actions.jsx';
import {FETCH_POSTS, FETCH_SELECTED_POST, FETCH_POSTS_BY_CATEGORY} from './actionTypes.jsx';

describe('fetchposts action', () => {
  it('loads posts', () => {
    var posts = [
      {
        id: 1,
        title: 'Save energy',
        category_id: 1,
        content: 'Turn off lights when I leave a room and use natural lighting as much as possible'
      }

    ];
    expect(loadedPosts(posts)).toEqual({type: FETCH_POSTS, payload: posts});
  });
  it('has the correct type', () => {
    const action = loadedPosts();
    expect(action.type).toEqual("FETCH_POSTS");
  });
});

describe('select posts by category', () => {
  it('loads the selected category posts', () => {
    var posts = [
      {
        id: 1,
        title: 'Save energy',
        category_id: 1,
        content: 'Turn off lights when I leave a room and use natural lighting as much as possible'
      }
    ]
    expect(loadedPostsByCategory(posts)).toEqual({type: FETCH_POSTS_BY_CATEGORY, payload: posts});
  });
  it('has the correct type', () => {
    const action = loadedPostsByCategory();
    expect(action.type).toEqual("FETCH_POSTS_BY_CATEGORY");
  });
});

describe('selected post', () => {
  it('loads the selected post', () => {
    var post = [
      {
        id: 1,
        title: 'Save energy',
        category_id: 1,
        content: 'Turn off lights when I leave a room and use natural lighting as much as possible'
      }
    ]
    expect(selectedPost(post)).toEqual({type: FETCH_SELECTED_POST, payload: post});
  });
  it('has the correct type', () => {
    const action = selectedPost();
    expect(action.type).toEqual("FETCH_SELECTED_POST");
  });
});