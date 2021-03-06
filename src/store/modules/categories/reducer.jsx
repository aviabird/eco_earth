import * as actionTypes from "./actionTypes";

const INITIAL_STATE = {
  categoryids: [],
  categories: {},
  selected_category: {},
  isFetchingCategories: false,
  isFetchingSingleCategories: false,
  formloaded: false,
  // selected_category: null,
  // isFetchingCategories: false
};

export default function(state = INITIAL_STATE, action) {
  //action coming from actioncontainers

  switch (action.type) {
    case actionTypes.FETCH_CATEGORIES:
      return { ...state, isFetchingCategories: true };
    case actionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categoryids: Object.keys(action.payload),
        categories: action.payload,
        isFetchingCategories: false
      };

    case actionTypes.CREATE_CATEGORY:
      return { ...state };

    case actionTypes.CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        categoryids: Object.keys(action.payload),
        categories: action.payload,
        formloaded: true
      };

    case actionTypes.FETCH_SELECTED_CATEGORY:
      return {
        ...state,
        isFetchingSingleCategories: true
      };

    case actionTypes.FETCH_SELECTED_CATEGORY_SUCCESS:
      return {
        ...state,
        selected_category: action.payload
        //isFetchingSingleCategories: false
      };

    case actionTypes.UPDATE_CATEGORY:
      return {
        ...state
      };

    case actionTypes.UPDATE_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        formloaded: true
      };

    case actionTypes.DELETE_SELECTED_CATEGORY:
      return { ...state, categories: action.payload };

    default: {
      return state;
    }
  }
}
