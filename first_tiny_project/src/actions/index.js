import { LOGIN, LOGOUR } from './type';

export const login = (accessToken, loginWith) => ({
  type: LOGIN,
  accessToken,
  loginWith
});
export const logout = () => ({ type: LOGOUR });
