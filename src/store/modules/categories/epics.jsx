import HomeService from '../../services/HomeService';
import { loadedCategories } from './actions';

export function fetchCategories() {
  return dispatch => {
    return HomeService.getCategories()
      .then(categories => {
        dispatch(loadedCategories(categories))
      }).catch(error => {
        throw error;
      });
  }
}