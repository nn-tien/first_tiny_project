import { connect } from 'react-redux';
import Component from '../components';
import * as actions from '../../../actions';
import { LOGIN } from '../../../actions/type';

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
  login: (accessToken, loginWith) =>
    dispatch(actions.login(accessToken, loginWith))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
