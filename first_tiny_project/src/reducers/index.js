import { combineReducers } from 'redux';
import exploreData from '../features/explore/reducers';
import savedData from '../features/saved/reducers';
import inboxData from '../features/inbox/reducers';
import profileData from '../features/profile/reducers';
import { nav, auth } from '../navigation/reducers';

export default combineReducers({
  exploreData,
  savedData,
  inboxData,
  profileData,
  nav: nav,
  auth: auth
});
