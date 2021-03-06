import { connect } from 'react-redux';
import Component from '../components/room_list';

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getData: () => {
      //dispatch(actionSuccess());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
