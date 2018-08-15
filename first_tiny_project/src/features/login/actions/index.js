import { LOGIN } from '../../../actions/type';

export const login = (authToken, baseUser) => ({
  type: LOGIN,
  authToken,
  baseUser
});

export const actionPending = () => ({
  type: 'ACTION_PENDING'
});

export const actionSuccess = () => ({
  type: 'ACTION_SUCCESS'
});
