import ENV from '../AppConstants';
import { ajax } from 'rxjs/observable/dom/ajax';

const API_URL = ENV.API_URL;

export default class HomeService {

  static getPosts() {
    return ajax.getJSON(`${API_URL}/posts`)
      .map(resp => resp.data);
  }

  static getPostById(id) {
    return ajax.getJSON(`${API_URL}/posts/${id}`)
      .map(resp => resp.data);
  }

  static getCategories() {
    return ajax.getJSON(`${API_URL}/categories`)
      .map(resp => resp.data);
  }

  static getPostlistFor(category_id) {
    return ajax.getJSON(`${API_URL}/posts`)
      .map(resp => {
        return resp.data.filter((post) => {
          return post.category_id === category_id
        });
      });
  }
}
