import * as actionTypes from "./actionTypes";

export function authentication(user) {
  return { type: actionTypes.AUTHENTICATION, payload: user };
}

export function logout() {
  return { type: actionTypes.LOGOUT, payload: false };
}
