import * as actionTypes from "./actionTypes";
import appServices from "../../../services/Services";
import * as userActions from "./actions";

export const authentication = (action$, { getJSON }) => {
  return action$
    .ofType(actionTypes.AUTHENTICATION)
    .map(action => action.payload)
    .switchMap(user => appServices().HOME.authentication(user))
    .map(data => userActions.authenticationSuccess(data));
};


export const UserProfileUpdate = (action$, { getJSON }) => {
  return action$
    .ofType(actionTypes.UPDATE_PROFILE)
    .map(action => action.payload)
    .switchMap(userdata => appServices().HOME.updateProfile(userdata))
    .map(data => userActions.profileUpdateSuccess(data));
};
