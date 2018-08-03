import { LOGIN } from '../../../actions/type';

export const login = (authToken, baseUser) => ({
  type: LOGIN,
  authToken,
  baseUser
});
