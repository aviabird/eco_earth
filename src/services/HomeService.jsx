import axios from 'axios';
import ENV from '../AppConstants';

const API_URL = ENV.API_URL;

export default class HomeService {

  static getPosts() {
    return axios.get(`${API_URL}/posts`)
      .then(resp => resp.data.data)
      .catch(err => {
        throw err;
      });
  }

  static getPostById(id) {
    return axios.get(`${API_URL}/posts/${id}`)
      .then(resp => resp.data.data)
      .catch(err => {
        throw err;
      });
  }

  static getCategories() {
    return axios.get(`${API_URL}/categories`)
      .then(resp => resp.data.data)
      .catch(err => {
        throw err;
      });
  }

  static getPostlistFor(category_id) {
    return axios.get(`${API_URL}/posts`)
      .then(resp => {
        return resp.data.data.filter(function (post) {
          return post.category_id === category_id
        });
      })
      .catch(err => {
        throw err;
      });
  }
}
