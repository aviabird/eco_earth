import HomeService from '../../../services/HomeService';
import * as actionTypes from './actionTypes';
import * as categoryActions from './actions';


export const FetchCategories = (action$,{ getJSON }) => {
  return action$.ofType(actionTypes.FETCH_CATEGORIES)
    .switchMap(() =>
      HomeService.getCategories()
        .map(categoryActions.fetchCategoriesSuccess)
    )
}