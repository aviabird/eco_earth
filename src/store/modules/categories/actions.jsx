import { FETCH_CATEGORIES } from './actionTypes';

export function loadedCategories(categories) {
  return {type: FETCH_CATEGORIES, payload: categories};
}