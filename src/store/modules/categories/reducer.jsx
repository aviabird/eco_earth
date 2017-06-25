import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
  categories: [],
  selected_category: null,
  isFetchingCategories: false
};

export default function (state = INITIAL_STATE, action) { //action coming from actioncontainers

  switch (action.type) {
    case actionTypes.FETCH_CATEGORIES:
      return { ...state, isFetchingCategories: true }
    case actionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        isFetchingCategories: false
      }
    default:
      {
        return state;
      }

  }
}