const INITIAL_STATE = {
  categories: [],
  selected_category: null
};

export default function (state = INITIAL_STATE, action) { //action coming from actioncontainers

  switch (action.type) {
    case 'FETCH_CATEGORIES':
      return {
        ...state,
        categories: action.payload
      }
    default:
      {
        return state;
      }

  }
}