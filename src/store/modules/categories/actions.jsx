import * as actionTypes from "./actionTypes";

export function fetchCategories() {
  return { type: actionTypes.FETCH_CATEGORIES };
}

export function fetchCategoriesSuccess(categories) {
  return { type: actionTypes.FETCH_CATEGORIES_SUCCESS, payload: categories };
}
