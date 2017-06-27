import { ActionsObservable } from "redux-observable";
import { fetchPosts,getPostlistFor } from "./epics";
import * as actionTypes from "./actionTypes.jsx";
import { ajax } from "rxjs/observable/dom/ajax";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/switchMap";
import "rxjs/add/observable/of";
import "rxjs/add/operator/toArray";
import "rxjs/add/operator/map";

describe("fetchPosts", () => {
  it("should emit a FETCH_POSTS_SUCCESS action with action type and data as payload", () => {
    var data = {
      id: 1,
      title: "Save energy",
      category_id: 1,
      content:
        "Turn off lights when I leave a room and use natural lighting as much as possible"
    };
    const actions$ = ActionsObservable.of({
      type: actionTypes.FETCH_POSTS
    });
    const dependencies = {
      getJSON: url => Observable.of(mockResponse)
    };

    fetchPosts(actions$, dependencies)
      .toArray() // buffers all emitted actions until your Epic naturally completes()
      .subscribe(actions => {
        assertDeepEqual(actions, [
          {
            type: actionTypes.FETCH_POSTS_SUCCESS,
            payload: data
          }
        ]);
      });
  });
  it("should emit a FETCH_POSTS_BY_CATEGORY_SUCCESS action with action type and data as payload", () => {
    var data = {
      id: 1,
      title: "Save energy",
      category_id: 1,
      content:
        "Turn off lights when I leave a room and use natural lighting as much as possible"
    };
    const actions$ = ActionsObservable.of({
      type: actionTypes.FETCH_POSTS_BY_CATEGORY,
      payload: 1
    });
    const dependencies = {
      getJSON: url => Observable.of(mockResponse)
    };

    getPostlistFor(actions$, dependencies)
      .toArray() // buffers all emitted actions until your Epic naturally completes()
      .subscribe(actions => {
        assertDeepEqual(actions, [
          {
            type: actionTypes.FETCH_POSTS_BY_CATEGORY_SUCCESS,
            payload:data
          }
        ]);
      });
  });
});