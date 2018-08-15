import { connect } from 'react-redux';
import Component from '../components';
import { logout } from '../actions';

import { navigateLogin } from '../../../navigation/actions';
const mapStateToProps = state => ({ ...state });

// const mapDispatchToProps = dispatch => ({
//   logout: () => dispatch({ type: LOGOUT })
// });

export default connect(
  mapStateToProps,
  { logout, navigateLogin }
)(Component);
