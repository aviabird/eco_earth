import { expect } from 'chai';
import { categoryReducer } from '../../src/store/categories/reducers';

const INITIAL_STATE = {
  categories: [],
  selected_category: null,
};


describe('Category Reducer', () => {
  it('should have initial state', () => {
    expect(categoryReducer()).toEqual(INITIAL_STATE);
  });
});