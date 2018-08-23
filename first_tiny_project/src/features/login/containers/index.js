import { connect } from 'react-redux';
import Component from '../components';
import { actionPending, actionSuccess, actionError } from '../../../actions';

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => {
  return {
    test: () => {}
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
