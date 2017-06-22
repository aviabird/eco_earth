import {loadedCategories} from './actions.jsx';


describe('fetchcategories action', () => {
  it('loads categories', () => {
    var categories = [
      {
        id: 1,
        category: 'energy conservation'
      }, {
        id: 2,
        category: 'no plastics'
      }
    ];
    const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
    expect(loadedCategories(categories)).toEqual({type: FETCH_CATEGORIES, payload: categories});
  });
  it('has the correct type', () => {
      const action = loadedCategories();
      expect(action.type).toEqual( "FETCH_CATEGORIES" );
  });
});