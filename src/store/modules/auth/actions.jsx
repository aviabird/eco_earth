import * as actionTypes from "./actionTypes";

export function authentication(user) {
  return { type: actionTypes.AUTHENTICATION, payload: user };
}

export function authenticationSuccess(user) {
  return { type: actionTypes.AUTHENTICATION_SUCCESS, payload: user };
}

export function logout() {
  return { type: actionTypes.LOGOUT, payload: false };
}

export function profileUpdate(updated_data, id) {
  return {
    type: actionTypes.UPDATE_PROFILE,
    payload: Object.assign({}, updated_data, { uid: id })
  };
}

export function profileUpdateSuccess(data) {
  return { type: actionTypes.UPDATE_PROFILE_SUCCESS, payload: data };
}
