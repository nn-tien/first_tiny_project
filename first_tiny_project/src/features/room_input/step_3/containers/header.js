import { connect } from 'react-redux';
import Component from '../components/header';

import { actionSuccess } from '../../../../actions';

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => {
  return {
    getData3: () => {
      //dispatch(actionSuccess());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
