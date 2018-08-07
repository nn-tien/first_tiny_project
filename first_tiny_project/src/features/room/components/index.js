import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import {
  Text,
  View,
  StatusBar,
  FlatList,
  TouchableOpacity
} from 'react-native';

import commonStyles from '../../../assets/styles';
import LinearGradient from 'react-native-linear-gradient';

import { CachedImage } from 'react-native-cached-image';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Room extends Component {
  constructor(params) {
    super(params);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ position: 'absolute', bottom: 10, right: 10 }}>
          <TouchableOpacity
            onPress={() => {
              //this.props.navigation.back();
              this.props.navigation.dispatch(NavigationActions.back());
            }}
          >
            <View
              style={{
                backgroundColor: '#3b5998',
                width: 60,
                height: 60,
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Ionicons name="ios-add" size={60} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
