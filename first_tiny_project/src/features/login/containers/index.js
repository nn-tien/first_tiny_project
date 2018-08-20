import { connect } from 'react-redux';
import Component from '../components';
import { setAuthData } from '../actions';
import { navigateMain } from '../../../navigation/actions';
import { actionPending, actionSuccess, actionError } from '../../../actions';

import { postApi } from '../../../api';
import urlApi from '../../../api/constants';

const FBSDK = require('react-native-fbsdk');
const { AccessToken, LoginManager } = FBSDK;
import { GoogleSignin } from 'react-native-google-signin';

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => {
  return {
    test: () => {}
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
