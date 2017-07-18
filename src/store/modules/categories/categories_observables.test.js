import { ActionsObservable } from 'redux-observable';
import { FetchCategories } from "./epics";
import * as actionTypes from "./actionTypes.jsx";
import { ajax } from "rxjs/observable/dom/ajax";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/map';

describe("FetchCategoriesEpic", () => {
  it("should emit a FETCH_CATEGORIES_SUCCESS action with action type and data as payload", () => {
    var data = {
      id: 1,
      category: "energy conservation"
    };
    var categories = {
      type: actionTypes.FETCH_CATEGORIES_SUCCESS,
      payload: data
    };

    const actions$ = ActionsObservable.of({
      type: actionTypes.FETCH_CATEGORIES
    });
    const mockResponse = {
      type: actionTypes.FETCH_CATEGORIES_SUCCESS,
      payload: data
    };
    const dependencies = {
      getJSON: url =>
        Observable.of(mockResponse)
    };

    FetchCategories(actions$, dependencies)
      .toArray() // buffers all emitted actions until your Epic naturally completes()
      .subscribe(actions => {
        assertDeepEqual(actions, [
          {
            type: actionTypes.FETCH_CATEGORIES_SUCCESS,
            payload: mockResponse
          }
        ]);
      });
  });
});
