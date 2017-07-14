import ENV from "../AppConstants";
import { ajax } from "rxjs/observable/dom/ajax";
import { Observable } from "rxjs/Observable";
import database from "../index";
export const API_URL = ENV.API_URL;

export default class HomeService {
 
  static getPostById(id) {
    return ajax.getJSON(`${API_URL}/posts/${id}`).map(resp => resp.data);
  }

  static getFirebasePosts() {
    var postsRef = database.ref("posts");
    return Observable.create(observer => {
      postsRef.once("value", function(snapshot) {
        return observer.next(snapshot.val());
      });
    });
    // test.then(a => console.log('value', a));

    // return Observable.of('a'); // fromPromise(test);
    // .then(res => {
    //   console.log('res from promise', res)
    //   return res
    // })
    // );
  }

  static postSubmit(post) {
    var firebaseRef = database.ref("posts");
    firebaseRef.push(post);
    this.getFirebasePosts();
  }

  static getCategories() {
    return ajax.getJSON(`${API_URL}/categories`).map(resp => resp.data);
  }

  static getPostlistFor(category_id) {
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
