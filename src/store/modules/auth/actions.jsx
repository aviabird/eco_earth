import * as actionTypes from "./actionTypes";

export function storeUser(user) {
  return { type: actionTypes.STORE_USER, payload: user };
}

export function storeUserSuccess(user) {
  return { type: actionTypes.STORE_USER_SUCCESS, payload: user };
}

export function fetchUser(id) {
  return { type: actionTypes.FETCH_USER, payload: id };
}

export function fetchUserSuccess(user) {
  return { type: actionTypes.FETCH_USER_SUCCESS, payload: user };
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
