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
    .switchMap(() => appServices().HOME.getFirebaseCategories())
    .map(data => {
      return categoryActions.fetchCategoriesSuccess(data);
    });
};
