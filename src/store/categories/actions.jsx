import * as categoryService from '../../services/HomeService';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

export function fetchCategories() {
  var categories = categoryService.getCategories();
  return {type: FETCH_CATEGORIES, payload: categories};
}