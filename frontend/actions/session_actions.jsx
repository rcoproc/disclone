import * as APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const login = (user) => (dispatch) => {
    return APIUtil.login(user).then((currentUser) => dispatch(receiveCurrentUser(currentUser)));
  };

export const logout = () => (dispatch) => {
  return APIUtil.logout().then(() =>
  dispatch(receiveCurrentUser(null)));
};

export const createAccount = (user) => dispatch => {
  return APIUtil.createAccount(user).then((currentUser)=> dispatch(receiveCurrentUser(currentUser)));
  };

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};