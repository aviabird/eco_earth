import ENV from "../../../AppConstants";
import { Observable } from "rxjs/Observable";
import database from "../../../index.js";
import * as firebase from "firebase";

export const API_URL = ENV.API_URL;

export default class AdminService {
  static getPosts() {
    var postsRef = database.ref("posts");
    return Observable.create(observer => {
      postsRef.once("value", function(snapshot) {
        return observer.next(snapshot.val());
      });
    });
  }

  //Firebase service for fetching categories

  static getCategories() {
    var categoriesRef = database.ref("categories");
    return Observable.create(observer => {
      categoriesRef.once("value", function(snapshot) {
        return observer.next(snapshot.val());
      });
    });
  }

  static categorySubmit(category) {
    var firebaseRef = database.ref("categories");
    firebaseRef.push(category);
    return Observable.create(observer => {
      firebaseRef.once("value", function(snapshot) {
        return observer.next(snapshot.val());
      });
    });
  }
  static postApproval(postid) {
    var postsref = database.ref(`/posts`);
    var ref = database.ref(`/posts/${postid}`);
    ref.update({ status: "approved" });
    return Observable.create(observer => {
      postsref.once("value", function(snapshot) {
        return observer.next(snapshot.val());
      });
    });
  }

  static postRejection(postid) {
    var postsref = database.ref(`/posts`);
    var ref = database.ref(`/posts/${postid}`);
    ref.update({ status: "rejected" });
    return Observable.create(observer => {
      postsref.once("value", function(snapshot) {
        return observer.next(snapshot.val());
      });
    });
  }

  static getCategoryById(category_id) {
    var ref = database.ref(`/categories/${category_id}`);
    return Observable.create(observer => {
      ref.once("value", function(snapshot) {
        return observer.next(snapshot.val());
      });
    });
  }

  static categoryUpdate(category) {
    var firebaseRef = database.ref(`/categories/${category.id}`);
    firebaseRef.update(category.data);
    return Observable.create(observer => {
      firebaseRef.once("value", function(snapshot) {
        return observer.next(snapshot.val());
      });
    });
  }

  static handleError(resp) {
    return Observable.of(null);
  }
}
