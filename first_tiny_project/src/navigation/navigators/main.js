import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import * as screenNames from '../screen_names';
import Explore from '../../features/explore/containers';
import Saved from '../../features/saved/containers';
import Inbox from '../../features/inbox/containers';
import Profile from '../../features/profile/containers';

import commonStyles from '../../assets/styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
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
          iconName = 'search';
        } else if (routeName === screenNames.SAVED) {
          iconName = 'favorite-border';
        } else if (routeName === screenNames.INBOX) {
          iconName = 'chat-bubble-outline';
        } else if (routeName === screenNames.PROFILE) {
          iconName = 'person-outline';
        }
        return <Icon name={iconName} size={30} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: '#0077b5',
      inactiveTintColor: '#666',
      showLabel: false,
      style: { backgroundColor: '#fff', height: 55, padding: 0, margin: 0 }
    }
  }
);
