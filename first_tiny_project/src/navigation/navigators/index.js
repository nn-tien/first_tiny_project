import React from 'react';
import { createStackNavigator } from 'react-navigation';
import MainNavigator from './main';
import * as screenNames from '../screen_names';
import Login from '../../features/login/containers';
import Room from '../../features/room/containers';

const RootNavigator = createStackNavigator(
  {
    [screenNames.LOGIN]: {
      screen: Login
    },
    [screenNames.MAIN]: {
      screen: MainNavigator
    },
    [screenNames.ROOM]: {
      screen: Room
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default RootNavigator;
