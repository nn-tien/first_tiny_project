import { connect } from 'react-redux';
import Component from '../components';
import * as actions from '../actions';
import { LOGIN } from '../../../actions/type';

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
  login: () => dispatch({ type: LOGIN })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
