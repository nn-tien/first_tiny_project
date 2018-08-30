import { combineReducers } from 'redux';
import { LOGIN, LOGOUT } from '../actions/type';
//import userData from '../features/login/reducers';
import exploreData from '../features/explore/reducers';
// import savedData from '../features/saved/reducers';
// import inboxData from '../features/inbox/reducers';
// import profileData from '../features/profile/reducers';
//import nav from '../navigation/reducers';

let authState = { authToken: '', baseUser: {} };

const authData = (state = authState, action) => {
  switch (action.type) {
    case 'SET_AUTH_DATA':
      return {
        ...state,
        authToken: action.authToken,
        baseUser: action.baseUser
      };
    case 'CLEAR_AUTH_DATA':
      return { ...state, authToken: '', baseUser: {} };
    default:
      return state;
  }
};

let pendingState = { isPending: false };

const actionData = (state = pendingState, action) => {
  switch (action.type) {
    case 'ACTION_PENDING':
      return { ...state, isPending: true };
    case 'ACTION_SUCCESS':
      return { ...state, isPending: false };
    case 'ACTION_ERROR':
      return { ...state, isPending: false };
    default:
      return state;
  }
};

export default combineReducers({
  authData,
  actionData,
  exploreData
});
