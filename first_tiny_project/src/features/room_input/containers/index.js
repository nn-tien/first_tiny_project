import { connect } from 'react-redux';
import Component from '../components';
import * as actions from '../actions';

import { actionPending, actionSuccess, actionError } from '../../../actions';

import { navigateBack } from '../../../navigation/actions';

import { postApi } from '../../../api';
import urlApi from '../../../api/constants';

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => {
  return {
    updateHandle: room => {
      dispatch(actionPending());
      postApi(urlApi.room_insert, {
        authToken: 'accessToken',
        room: room
      })
        .then(val => {
          //dispatch(setAuthData());
          //dispatch(navigateMain());
          //dispatch(actionSuccess());
        })
        .catch(() => {
          dispatch(actionError());
        });
    },
    backHandle: () => {
      dispatch(navigateBack());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
