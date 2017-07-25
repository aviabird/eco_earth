import { Observable } from "rxjs/Observable";
import database from "../../index.js";

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
  }

  static postUpdate(post) {
    var firebaseRef = database.ref(`/posts/${post.id}`);
    firebaseRef.update(post);
    return Observable.of(post);
  }

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

  static storeUser(user) {
    var firebaseRef = database.ref(`users/${user.uid}`);
    firebaseRef.set({
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      photoURL: user.photoURL,
      isAnonymous: user.isAnonymous,
      uid: user.uid,
      providerData: user.providerData
    });
    return Observable.create(observer => {
      firebaseRef.once("value", function(snapshot) {
        return observer.next(snapshot.val());
      });
    });
  }
  static fetchUser(userid) {
    var firebaseRef = database.ref(`users/${userid}`);
    return Observable.create(observer => {
      firebaseRef.once("value", function(snapshot) {
        return observer.next(snapshot.val());
      });
    });
  }
  static updateProfile(user) {
    var firebaseRef = database.ref(`/users/${user.uid}`);
    firebaseRef.update(user);
    return Observable.create(observer => {
      firebaseRef.once("value", function(snapshot) {
        return observer.next(snapshot.val());
      });
    });
  }

  static handleError(resp) {
    return false;
  }
}
