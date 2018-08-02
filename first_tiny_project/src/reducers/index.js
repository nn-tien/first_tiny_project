import { combineReducers } from 'redux';
import { LOGIN, LOGOUT } from '../actions/type';
//import loginData from '../features/login/reducers';
// import exploreData from '../features/explore/reducers';
// import savedData from '../features/saved/reducers';
// import inboxData from '../features/inbox/reducers';
// import profileData from '../features/profile/reducers';
import nav from '../navigation/reducers';

let initialState = { isLogin: false, accessToken: '', loginWith: '' };

const authData = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: true,
        accessToken: action.accessToken,
        loginWith: action.loginWith
      };
    case LOGOUT:
      return { ...state, isLogin: false, accessToken: '', loginWith: '' };
    default:
      return state;
  }
};

let initialUserState = {
  _id: '',
  name: '',
  first_name: '',
  last_name: '',
  email: '',
  avatar: '',
  create_date: '',
  update_date: ''
};

const userData = (state = initialUserState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: true,
        accessToken: action.accessToken,
        loginWith: action.loginWith
      };
    case LOGOUT:
      return { ...state, isLogin: false, accessToken: '', loginWith: '' };
    default:
      return state;
  }
};

export default combineReducers({
  authData,
  userData,
  // savedData,
  // inboxData,
  // profileData,
  nav
});
