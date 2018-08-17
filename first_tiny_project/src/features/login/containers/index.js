import { connect } from 'react-redux';
import Component from '../components';
import { setAuthData } from '../actions';
import { navigateMain } from '../../../navigation/actions';
import { actionPending, actionSuccess, actionError } from '../../../actions';

import { postApi } from '../../../api';
import urlApi from '../../../api/constants';

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => {
  return {
    loginHandle: (accessToken, loginWith) => {
      dispatch(actionPending());
      postApi(urlApi.login, {
        accessToken: accessToken,
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
