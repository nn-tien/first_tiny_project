import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import * as screenNames from '../screen_names';
import Explore from '../../features/explore/containers';
import Saved from '../../features/saved/containers';
import Inbox from '../../features/inbox/containers';
import Profile from '../../features/profile/containers';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default createBottomTabNavigator(
  {
    [screenNames.EXPLORE]: {
      screen: Explore
    },
    [screenNames.SAVED]: {
      screen: Saved
    },
    [screenNames.INBOX]: {
      screen: Inbox
    },
    [screenNames.PROFILE]: {
      screen: Profile
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === screenNames.EXPLORE) {
          iconName = `ios-search${focused ? '' : '-outline'}`;
        } else if (routeName === screenNames.SAVED) {
          iconName = `ios-heart${focused ? '' : '-outline'}`;
        } else if (routeName === screenNames.INBOX) {
          iconName = `ios-chatboxes${focused ? '' : '-outline'}`;
        } else if (routeName === screenNames.PROFILE) {
          iconName = `ios-person${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: '#3b5998',
      inactiveTintColor: 'gray',
      showLabel: false
    }
  }
);
