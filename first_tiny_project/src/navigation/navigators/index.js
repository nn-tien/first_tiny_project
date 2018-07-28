import React from 'react';
import { createStackNavigator } from 'react-navigation';
import MainNavigator from './main';
import * as screenNames from '../screen_names';
import Login from '../../features/login/containers';

const RootNavigator = createStackNavigator(
  {
    [screenNames.LOGIN]: {
      screen: Login
    },
    [screenNames.MAIN]: {
      screen: MainNavigator
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
