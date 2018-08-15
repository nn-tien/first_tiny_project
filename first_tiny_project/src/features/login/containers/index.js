import { connect } from 'react-redux';
import Component from '../components';
import { login } from '../actions';
import { navigateMain } from '../../../navigation/actions';

const mapStateToProps = state => ({ ...state });

export default connect(
  mapStateToProps,
  { login, navigateMain }
)(Component);
