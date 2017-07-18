import ENV from '../../../AppConstants';
import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs/Observable';
import {database} from '../../.././index';
import * as firebase from 'firebase';

export const API_URL = ENV.API_URL;

//const API_URL = ENV.API_URL;

export default class AdminService {

  static getPosts() {
    return ajax.getJSON(`${API_URL}/posts`)
      .map(resp => resp.data)
      .catch(this.handleError);
  }

  static getPostById(id) {
    return ajax.getJSON(`${API_URL}/posts/${id}`)
      .map(resp => resp.data);
  }

//Firebase service for fetching categories

  static getCategories() {
    var categoriesRef = database().ref("categories");
    return Observable.create(observer => {
      categoriesRef.once("value", function(snapshot) {
        return observer.next(snapshot.val());      
      });
    });
  } 


  static getPostlistFor(category_id) {
    return ajax.getJSON(`${API_URL}/posts`)
      .map(resp => {
        return resp.data.filter((post) => {
          return post.category_id === category_id
        });
      });
  }

  static categorySubmit(category){
    var firebaseRef = firebase.database().ref('categories');
    firebaseRef.push(category);
    this.getCategories();
    return Observable.of(category);
  }

  
  static getCategoryById(category_id) {
    var ref = firebase.database().ref(`/categories/${category_id}`);
    return Observable.create(observer => {
      ref.once("value", function(snapshot) {
        return observer.next(snapshot.val());
      });
    });
  }

  static categoryUpdate(category) {
    var firebaseRef = firebase.database().ref(`/categories/${category.category_id}`);
    firebaseRef.update(category);
    return Observable.of(category);
  }

  static handleError(resp) {
    return Observable.of(null)
  }
}
  