import * as actionTypes from "./actionTypes";


const INITIAL_STATE = {
  isAuthenticated: false,
  user: null
};

export default function(state = INITIAL_STATE, action) {
  //action coming from actioncontainers

  switch (action.type) {
    case actionTypes.AUTHENTICATION:
      return { ...state, isAuthenticated: true, user: action.payload };

    default: {
      return state;
    }
  }
}
