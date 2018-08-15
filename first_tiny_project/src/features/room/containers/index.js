import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from '../components';
import * as actions from '../actions';

import { navigateBack } from '../../../navigation/actions';

const mapStateToProps = state => ({ ...state });

// const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  { navigateBack }
)(Component);
