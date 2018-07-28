import React from 'react';
import { createStackNavigator } from 'react-navigation';
import WelcomeNavigator from './welcome';
import MainNavigator from './main';
import * as screenNames from '../screen_names';
import Splash from '../../features/splash/components';

const RootNavigator = createStackNavigator(
  {
    [screenNames.SPLASH]: {
      screen: Splash
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
