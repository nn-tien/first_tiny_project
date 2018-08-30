import { connect } from 'react-redux';
import Component from '../components';

import { actionSuccess } from './../../../actions';
import { postApi } from '../../../api';
import urlApi from '../../../api/constants';

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => {
  return {
    getData: () => {
      //dispatch(actionSuccess());
      postApi(urlApi.get_data, {
        // accessToken: user.accessToken.toString(),
        // loginWith: loginWith
      })
        .then(val => {
          dispatch({ type: 'SET_DATA', quickSearch: val });
          //dispatch(navigateMain());
          //dispatch(actionSuccess());
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
