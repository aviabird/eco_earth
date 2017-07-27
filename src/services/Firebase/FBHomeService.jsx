import ENV from "../../AppConstants";
import { Observable } from "rxjs/Observable";
import database from "../../index.js";
export const API_URL = ENV.API_URL;

export default class FBHomeService {
  static getPostById(id) {
    var ref = database.ref(`/posts/${id}`);
    return Observable.create(observer => {
      ref.once("value", function(snapshot) {
        return observer.next(snapshot.val());
      });
    });
  }

  static getPosts() {
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


  static getCategories() {
    var categoriesRef = database.ref("categories");
    return Observable.create(observer => {
      categoriesRef.once("value", function(snapshot) {
        return observer.next(snapshot.val());
      });
    });
  }

  static getPostlistFor(category_id) {
    var postRef = database.ref(`posts`);
    return Observable.create(observer => {
      postRef
        .orderByChild("category_id")
        .equalTo(category_id)
        .once("value", function(snapshot) {
          return observer.next(snapshot.val());
        });
    });
  }

  static handleError(resp) {
    return false;
  }
}
