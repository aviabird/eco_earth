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

    default: {
      return state;
    }
  }
}
