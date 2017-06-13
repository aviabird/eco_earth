//reducers are always functions
const INITIAL_STATE = {
  posts: [],
  selected_post: null
};

export default function (state = INITIAL_STATE, action) { //action coming from actioncontainers

  switch (action.type) {
    case 'FETCH_POSTS': 
      return {...state, posts: action.payload}
    default:
      {
        return state;
      }

  }
}