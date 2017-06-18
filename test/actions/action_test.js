import { expect } from 'chai';
import { fetchCategories } from '../../src/store/categories/actions.js';
import { FETCH_CATEGORIES } from '../../src/store/categories/actions.js';
import { fetchPosts,fetchpostsbyCategory,selectedPost } from '../../src/store/posts/actions.js';
import { FETCH_POSTS,FETCH_POSTS_BY_CATEGORY,FETCH_SELECTED_POST } from '../../src/store/posts/actions.js';


describe('actions', () => {
  describe('fetchcategories', () => {
    it('has the correct type', () => {
      const action = fetchCategories();
      expect(action.type).to.equal( FETCH_CATEGORIES );
    });
  });
  describe('fetchPosts', () => {
    it('has the correct type', () => {
      const action = fetchPosts();
      expect(action.type).to.equal( FETCH_POSTS );
    });
  });
  describe('fetchpostsbyCategory', () => {
    it('has the correct type', () => {
      const action = fetchpostsbyCategory();
      expect(action.type).to.equal( FETCH_POSTS_BY_CATEGORY );
    });
  });
  describe('selectedPost', () => {
    it('has the correct type', () => {
      const action = selectedPost();
      expect(action.type).to.equal( FETCH_SELECTED_POST );
    });
  });
});