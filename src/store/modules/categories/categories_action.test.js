import { fetchCategoriesSuccess } from "./actions.jsx";

describe("fetchcategories action", () => {
  it("loads categories", () => {
    var categories = [
      {
        id: 1,
        category: "energy conservation"
      },
      {
        id: 2,
        category: "no plastics"
      }
    ];
    const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
    expect(fetchCategoriesSuccess(categories)).toEqual({
      type: FETCH_CATEGORIES_SUCCESS,
      payload: categories
    });
  });
  it("has the correct type", () => {
    const action = fetchCategoriesSuccess();
    expect(action.type).toEqual("FETCH_CATEGORIES_SUCCESS");
  });
});
