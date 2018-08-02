import { connect } from 'react-redux';
import Component from '../components';
import * as actions from '../actions';

const mapStateToProps = state => ({ ...state });

// const mapDispatchToProps = dispatch => ({
//   logout: () => dispatch({ type: LOGOUT })
// });

export default connect(
  mapStateToProps,
  actions
)(Component);
