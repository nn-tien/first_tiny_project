import React from 'react';
import { createStackNavigator } from 'react-navigation';
import MainNavigator from './main';
import * as screenNames from '../screen_names';
import Login from '../../features/login/containers';
import Room from '../../features/room/containers';
import RoomInput from '../../features/room_input/containers';
import RoomInputStep1 from '../../features/room_input/step_1/containers';
import RoomInputStep2 from '../../features/room_input/step_2/containers';
import RoomInputStep3 from '../../features/room_input/step_3/containers';
import RoomDetail from '../../features/room_detail/containers';
const RootNavigator = createStackNavigator(
  {
    Login: Login,
    Main: MainNavigator,
    Room: Room,
    RoomInput: RoomInput,
    RoomInputStep1: RoomInputStep1,
    RoomInputStep2: RoomInputStep2,
    RoomInputStep3: RoomInputStep3,
    RoomDetail: RoomDetail
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default RootNavigator;
