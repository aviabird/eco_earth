import * as actionTypes from './actionTypes';
import * as firebase from 'firebase';

export function fetchCategories() {
  return {type: actionTypes.FETCH_CATEGORIES};
}

export function fetchCategoriesSuccess(categories) {
  return {type: actionTypes.FETCH_CATEGORIES_SUCCESS, payload: categories};
}

export function newCategoryCreate(props) {
  return {
    type: actionTypes.CREATE_CATEGORIES,
    payload: props
  };
}
export function newCategoryCreateSuccess(props) {
  return {
    type: actionTypes.CREATE_CATEGORY_SUCCESS,
    payload: props
  };
}

export function selectedCategory(category_id) {
  return {
    type: actionTypes.FETCH_SELECTED_CATEGORY,
    payload: category_id
  };
}

export function fetchSelectedCategorySuccess(category) {
  return {
    type: actionTypes.FETCH_SELECTED_CATEGORY_SUCCESS,
    payload: category
  };
}

export function categoryUpdate(props,category_id) {
  return {
    type: actionTypes.UPDATE_CATEGORY,
    payload: Object.assign({},props,{category_id:category_id})
  };
}

export function categoryUpdateSuccess(props) {
  return {
    type: actionTypes.UPDATE_CATEGORY_SUCCESS,
    payload: props
  };
}



