import { connect } from 'react-redux';
import Component from '../components/room_card';

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getData: () => {
      ownProps.navigation.navigate('RoomDetail');
      //dispatch(actionSuccess());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
