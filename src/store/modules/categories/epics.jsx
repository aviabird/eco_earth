<<<<<<< HEAD
import AdminService from '../../../app/admin/services/AdminService';
import * as actionTypes from './actionTypes';
import * as categoryActions from './actions';

/* For takepledge API
export const FetchCategories = (action$,{ getJSON }) => {
  return action$.ofType(actionTypes.FETCH_CATEGORIES)
    .switchMap(() =>
      AdminService.getCategories()
        .map(categoryActions.fetchCategoriesSuccess)
    )
}
*/

//Fetch categories with firebase 
export const FetchCategories = (action$, { getJSON }) => {
  return action$
    .ofType(actionTypes.FETCH_CATEGORIES)
    .switchMap(() => AdminService.getCategories())
=======
import * as actionTypes from "./actionTypes";
import appServices from "../../../services/Services";
import * as categoryActions from "./actions";

// export const FetchCategories = (action$,{ getJSON }) => {
//   return action$.ofType(actionTypes.FETCH_CATEGORIES)
//     .switchMap(() =>
//       HomeService.getCategories()
//         .map(categoryActions.fetchCategoriesSuccess)
//     )
// }

export const FetchCategories = (action$, { getJSON }) => {
  return action$
    .ofType(actionTypes.FETCH_CATEGORIES)
    .switchMap(() => appServices().HOME.getCategories())
>>>>>>> origin/development
    .map(data => {
      return categoryActions.fetchCategoriesSuccess(data);
    });
};
<<<<<<< HEAD

//Create new category with firebase
export const newCategoryCreate = (action$,{ getJSON } ) => {
  return action$.ofType(actionTypes.CREATE_CATEGORIES)
    .map( action => action.payload)
    .switchMap((category) => AdminService.categorySubmit(category))
    .map(category => categoryActions.fetchCategoriesSuccess(Object.values(category)))	
}

export const getSelectedCategory = (action$, { getJSON }) => {
  return action$.ofType(actionTypes.FETCH_SELECTED_CATEGORY)
    .map(action => action.payload)
    .switchMap(category_id => AdminService.getCategoryById(category_id)
      .map(categoryActions.fetchSelectedCategorySuccess))
}

export const categoryUpdation = (action$, { getJSON }) => {
  return action$
    .ofType(actionTypes.UPDATE_CATEGORY)
    .map(action => action.payload)
    .switchMap(category => AdminService.categoryUpdate(category))
    .map(category => categoryActions.categoryUpdateSuccess(category));
};
=======
>>>>>>> origin/development
