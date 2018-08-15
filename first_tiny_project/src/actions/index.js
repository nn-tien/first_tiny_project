import { LOGIN, LOGOUR } from './type';

export const login = (accessToken, loginWith) => ({
  type: LOGIN,
  accessToken,
  loginWith
});

export const back = () => ({
  type: 'BACK'
});

export const logout = () => ({ type: LOGOUR });
