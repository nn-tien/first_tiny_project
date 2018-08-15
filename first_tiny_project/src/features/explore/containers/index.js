import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from '../components';

import { navigateRoom } from '../../../navigation/actions';

const mapStateToProps = state => ({ ...state });

// const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  { navigateRoom }
)(Component);
