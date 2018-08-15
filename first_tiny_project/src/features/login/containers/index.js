import { connect } from 'react-redux';
import Component from '../components';
import { login, actionPending, actionSuccess } from '../actions';
import { navigateMain } from '../../../navigation/actions';

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
          dispatch(login());
          dispatch(navigateMain());
          dispatch(actionSuccess());
        })
        .catch(() => {
          dispatch(actionSuccess());
        });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
