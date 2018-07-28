import { LOGOUT } from '../actions/type';

let initialState = { isLogin: false };

const profileData = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return { ...state, isLogin: false };
    default:
      return state;
  }
};

export default profileData;
