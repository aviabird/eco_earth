import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
  categories: [],
  selected_category: null
};

export default function (state = INITIAL_STATE, action) { //action coming from actioncontainers

  switch (action.type) {
    case actionTypes.FETCH_CATEGORIES_SUCCESS:
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