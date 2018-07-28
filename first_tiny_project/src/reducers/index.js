import { combineReducers } from 'redux';
import loginData from '../features/login/reducers';
import exploreData from '../features/explore/reducers';
import savedData from '../features/saved/reducers';
import inboxData from '../features/inbox/reducers';
import profileData from '../features/profile/reducers';
import nav from '../navigation/reducers';

export default combineReducers({
  loginData,
  exploreData,
  savedData,
  inboxData,
  profileData,
  nav
});
