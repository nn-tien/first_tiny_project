import { connect } from 'react-redux';
import Component from '../components';
import { clearAuthData } from '../actions';

import { navigateLogin } from '../../../navigation/actions';

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => {
  return {
    logoutHandle: () => {
      dispatch(clearAuthData());
      dispatch(navigateLogin());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
