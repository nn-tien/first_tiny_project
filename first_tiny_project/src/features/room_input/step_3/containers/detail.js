import { connect } from 'react-redux';
import Component from '../components/detail';

import { actionSuccess } from '../../../../actions';

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => {
  return {
    getData1: () => {
      //dispatch(actionSuccess());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
