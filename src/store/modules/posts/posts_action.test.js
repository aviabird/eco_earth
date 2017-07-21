import {
  fetchPostsSuccess,
  fetchPostsByCategorySuccess,
  fetchSelectedPostSuccess,
  newpostCreateSuccess,
  postUpdateSuccess
} from "./actions.jsx";
import {
  FETCH_POSTS_SUCCESS,
  FETCH_SELECTED_POST_SUCCESS,
  FETCH_POSTS_BY_CATEGORY_SUCCESS,
  CREATE_POST_SUCCESS,
  POST_UPDATE_SUCCESS
} from "./actionTypes.jsx";

describe("fetchposts action", () => {
  it("loads posts", () => {
    var posts = [
      {
        id: 1,
        title: "Save energy",
        category_id: 1,
        content:
          "Turn off lights when I leave a room and use natural lighting as much as possible"
      }
    ];
    expect(fetchPostsSuccess(posts)).toEqual({type: FETCH_POSTS_SUCCESS, payload: posts});
  });
  it('has the correct type', () => {
    const action = fetchPostsSuccess();
    expect(action.type).toEqual("FETCH_POSTS_SUCCESS");
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
    expect(fetchPostsByCategorySuccess(posts)).toEqual({type: FETCH_POSTS_BY_CATEGORY_SUCCESS, payload: posts});
  });
  it('has the correct type', () => {
    const action = fetchPostsByCategorySuccess();
    expect(action.type).toEqual("FETCH_POSTS_BY_CATEGORY_SUCCESS");
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
    expect(fetchSelectedPostSuccess(post)).toEqual({type: FETCH_SELECTED_POST_SUCCESS, payload: post});
  });
  it('has the correct type', () => {
    const action = fetchSelectedPostSuccess();
    expect(action.type).toEqual("FETCH_SELECTED_POST_SUCCESS");
  });
});

describe('new post create', () => {
  it('submit a new post', () => {
    var post =
      {
        id: 1,
        title: 'Save energy',
        category_id: 1,
        content: 'Turn off lights when I leave a room and use natural lighting as much as possible'
      }

    expect(newpostCreateSuccess(post)).toEqual({type: CREATE_POST_SUCCESS, payload: post});
  });
  it('has the correct type', () => {
    const action = newpostCreateSuccess();
    expect(action.type).toEqual("CREATE_POST_SUCCESS");
  });
});

describe('post edit', () => {
  it('updates an existing post', () => {
    var post =
      {
        id: 1,
        title: 'Save energy',
        category_id: 1,
        content: 'Turn off lights when I leave a room and use natural lighting as much as possible'
      }

    expect( postUpdateSuccess(post)).toEqual({type:POST_UPDATE_SUCCESS, payload: post});
  });
  it('has the correct type', () => {
    const action =  postUpdateSuccess();
    expect(action.type).toEqual("POST_UPDATE_SUCCESS");
  });
});
