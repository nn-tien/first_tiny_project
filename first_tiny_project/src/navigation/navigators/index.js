import React from 'react';
import { createStackNavigator } from 'react-navigation';
import MainNavigator from './main';
import * as screenNames from '../screen_names';
import Login from '../../features/login/containers';
import Room from '../../features/room/containers';
import RoomInputStep1 from '../../features/room_input/step_1/containers';
import RoomDetail from '../../features/room_detail/containers';
const RootNavigator = createStackNavigator(
  {
    Login: Login,
    Main: MainNavigator,
    Room: Room,
    RoomInputStep1: RoomInputStep1,
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
