import * as actionTypes from "./actionTypes";

const INITIAL_STATE = {
  isAuthenticated: false,
  currentUser: null
};

export default function(state = INITIAL_STATE, action) {
  //action coming from actioncontainers

  switch (action.type) {
    case actionTypes.STORE_USER:
      return { ...state };
    case actionTypes.STORE_USER_SUCCESS:
      return { ...state, isAuthenticated: true, currentUser: action.payload };
    case actionTypes.FETCH_USER:
      return { ...state };
    case actionTypes.FETCH_USER_SUCCESS:
      return { ...state, isAuthenticated: true, currentUser: action.payload };
    case actionTypes.LOGOUT:
      return { ...state, isAuthenticated: action.payload, currentUser: null };
    case actionTypes.UPDATE_PROFILE:
      return { ...state };
    case actionTypes.UPDATE_PROFILE_SUCCESS:
      return { ...state, currentUser: action.payload };
    default: {
      return state;
    }
  }
}
