import { connect } from 'react-redux';
import Component from '../components/button_login';
import { setAuthData } from '../actions';
import { navigateMain } from '../../../navigation/actions';
import { actionPending, actionSuccess, actionError } from '../../../actions';

import { postApi } from '../../../api';
import urlApi from '../../../api/constants';

const FBSDK = require('react-native-fbsdk');
const { AccessToken, LoginManager } = FBSDK;
import { GoogleSignin } from 'react-native-google-signin';

import { store, persistor } from '../../../myStore';

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loginHandle: loginWith => {
      dispatch(actionPending());

      if (loginWith == 'facebook') {
        ownProps.navigation.navigate('Main');
        // LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
        //   function(result) {
        //     if (result.isCancelled) {
        //     } else {
        //       AccessToken.getCurrentAccessToken()
        //         .then(data => {
        //           postApi(urlApi.login, {
        //             accessToken: data.accessToken.toString(),
        //             loginWith: loginWith
        //           })
        //             .then(val => {
        //               dispatch(setAuthData(val.authToken, val.user));
        //               dispatch(navigateMain());
        //               dispatch(actionSuccess());
        //             })
        //             .catch(() => {
        //               dispatch(actionError());
        //             });
        //         })
        //         .catch(err => {})
        //         .done();
        //     }
        //   },
        //   function(error) {}
        // );
      } else {
        login = GoogleSignin.signIn()
          .then(user => {
            postApi(urlApi.login, {
              accessToken: user.accessToken.toString(),
              loginWith: loginWith
            })
              .then(val => {
                dispatch(setAuthData(val.authToken, val.user));
                dispatch(navigateMain());
                dispatch(actionSuccess());
              })
              .catch(() => {
                dispatch(actionError());
              });
          })
          .catch(err => {})
          .done();
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
