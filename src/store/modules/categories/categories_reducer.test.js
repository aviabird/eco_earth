import category_reducer from './reducer.jsx';
import {FETCH_CATEGORIES} from './actionTypes';

describe('fetchcategories reducer', () => {
  const INITIAL_STATE = {
    categories: [],
    selected_category: null
  };
  var state = INITIAL_STATE;
  it('updates categories state on empty payload', () => {
    var action = {
      type: FETCH_CATEGORIES,
      payload: {}
    };
    expect(category_reducer(state, action)).toEqual({categories: action.payload, selected_category: null})
  });
  it('updates categories state on non-empty payload', () => {
    var action = {
      type: FETCH_CATEGORIES,
      payload: [
        {
          id: 1,
          category: 'energy conservation'
        }, {
          id: 2,
          category: 'no plastics'
        }
      ]
    };
    expect(category_reducer(state, action)).toEqual({categories: action.payload, selected_category: null})
  });
});