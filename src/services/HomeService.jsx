import ENV from "../AppConstants";
import { ajax } from "rxjs/observable/dom/ajax";
import { Observable } from "rxjs/Observable";
import database from "../index";
export const API_URL = ENV.API_URL;

export default class HomeService {
 
  static getPostById(id) {
    var ref=database.ref(`/posts/${id}`);
    return Observable.create(observer => {
      ref.once("value", function(snapshot) {
        return observer.next(snapshot.val());
      });
    }); 
  }

  static getFirebasePosts() {
    var postsRef = database.ref("posts");
    return Observable.create(observer => {
      postsRef.once("value", function(snapshot) {
        return observer.next(snapshot.val());
      });
    });
  }

  static postSubmit(post) {
    var firebaseRef = database.ref("posts");
    firebaseRef.push(post);
    return Observable.of(post);
    //this.getFirebasePosts();
  }

static postUpdate(post) {
    var firebaseRef = database.ref(`/posts/${post.id}`);
    firebaseRef.update(post);
    return Observable.of(post);
    //this.getFirebasePosts();
  }

  // static getCategories() {
  //   return ajax.getJSON(`${API_URL}/categories`).map(resp => resp.data);
  // }

  static getFirebaseCategories() {
    var categoriesRef = database.ref("categories");
    return Observable.create(observer => {
      categoriesRef.once("value", function(snapshot) {
        return observer.next(snapshot.val());
      });
    });
  }


  static getPostlistFor(category_id) {
    var categories = database.ref(`categories/${category_id}`);
    return ajax.getJSON(`${API_URL}/posts`).map(resp => {
      return resp.data.filter(post => {
        return post.category_id === category_id;
      });
    });
  }

  static handleError(resp) {
    return false;
  }
}
