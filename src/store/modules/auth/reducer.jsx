import * as actionTypes from "./actionTypes";

const INITIAL_STATE = {
  isAuthenticated: false,
  currentUser: null
};

export default function(state = INITIAL_STATE, action) {
  //action coming from actioncontainers

  switch (action.type) {
    case actionTypes.AUTHENTICATION:
      return { ...state, isAuthenticated: true, currentUser: action.payload };
    case actionTypes.LOGOUT:
      return { ...state, isAuthenticated: action.payload, currentUser: null };
    default: {
      return state;
    }
  }
}
