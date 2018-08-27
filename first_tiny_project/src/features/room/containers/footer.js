import { connect } from 'react-redux';
import Component from '../components/footer';

import { actionSuccess } from './../../../actions';

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => {
  return {
    getData2: () => {
      //dispatch(actionSuccess());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
