import { LOGIN } from '../../../actions/type';

export const setAuthData = (authToken, baseUser) => ({
  type: 'SET_AUTH_DATA',
  authToken,
  baseUser
});
