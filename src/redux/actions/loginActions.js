import { ActionTypes } from '../constants/action-types';

export const loginUser = (userDetails) => ({
  type: ActionTypes.LOGIN,
  payload: userDetails,
});

export const logoutUser = () => ({
  type: ActionTypes.LOGOUT,
});

export const saveUrl = (str) => ({
  type: ActionTypes.SAVE_URL,
  payload: str,
});
