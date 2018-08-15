import { combineReducers } from 'redux';
import { LOGIN, LOGOUT } from '../actions/type';
//import userData from '../features/login/reducers';
// import exploreData from '../features/explore/reducers';
// import savedData from '../features/saved/reducers';
// import inboxData from '../features/inbox/reducers';
// import profileData from '../features/profile/reducers';
import nav from '../navigation/reducers';

let initialState = { authToken: '', baseUser: {} };

const authData = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        authToken: action.authToken,
        baseUser: action.baseUser
      };
    case LOGOUT:
      return { ...state, authToken: '', baseUser: {} };
    default:
      return state;
  }
};

export default combineReducers({
  authData,
  nav
});
