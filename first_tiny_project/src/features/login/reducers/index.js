import { LOGIN, LOGOUT } from '../actions/type';

let initialState = { isPending: false };

const loginData = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING':
      return { ...state, isPending: true };
    case 'LOGIN_SUCCESS':
      return { ...state, isPending: false };
    default:
      return state;
  }
};

export default loginData;
