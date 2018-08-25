import { connect } from 'react-redux';
import Component from '../components';

import { actionSuccess } from './../../../actions';

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => {
  return {
    getData: () => {
      dispatch(actionSuccess());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
