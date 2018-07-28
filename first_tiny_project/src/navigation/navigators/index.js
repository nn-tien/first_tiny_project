import React from 'react';
import { createStackNavigator } from 'react-navigation';
import WelcomeNavigator from './welcome';
import * as screenNames from '../screen_names';
import Splash from '../../features/splash/components';

const RootNavigator = createStackNavigator(
  {
    [screenNames.SPLASH]: {
      screen: Splash
    },
    [screenNames.WELCOME]: {
      screen: WelcomeNavigator
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
