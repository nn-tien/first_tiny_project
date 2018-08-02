import { LOGIN } from '../../../actions/type';

export const login = (accessToken, loginWith) => ({
  type: LOGIN,
  accessToken,
  loginWith
});
