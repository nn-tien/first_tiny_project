import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import * as screenNames from '../screen_names';
import Settings from '../../features/settings/containers';
import { UserProfile } from '../../features/user_profile/containers';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default createBottomTabNavigator(
  {
    [screenNames.SETTINGS]: {
      screen: Settings
    },

    [screenNames.USER_PROFILE]: {
      screen: UserProfile
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'UserProfile') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      showLabel: false
    }
  }
);
