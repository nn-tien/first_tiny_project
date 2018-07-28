import { combineReducers } from 'redux';
import settingsData from '../features/settings/reducers';
import userProfileData from '../features/user_profile/reducers';
import { nav, auth } from '../navigation/reducers';

export default combineReducers({
  settingsData,
  userProfileData,
  nav: nav,
  auth: auth
});
