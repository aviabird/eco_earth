import * as actionTypes from "./actionTypes";
import appServices from "../../../services/Services";
import * as userActions from "./actions";

export const storeUser = (action$, { getJSON }) => {
  return action$
    .ofType(actionTypes.STORE_USER)
    .map(action => action.payload)
    .switchMap(user => appServices().HOME.storeUser(user))
    .map(data => userActions.storeUserSuccess(data));
};

export const fetchUser = (action$, { getJSON }) => {
  return action$
    .ofType(actionTypes.FETCH_USER)
    .map(action => action.payload)
    .switchMap(uid => appServices().HOME.fetchUser(uid))
    .map(data => userActions.fetchUserSuccess(data));
};


export const UserProfileUpdate = (action$, { getJSON }) => {
  return action$
    .ofType(actionTypes.UPDATE_PROFILE)
    .map(action => action.payload)
    .switchMap(userdata => appServices().HOME.updateProfile(userdata))
    .map(data => userActions.profileUpdateSuccess(data));
};
