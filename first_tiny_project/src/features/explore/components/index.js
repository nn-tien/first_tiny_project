import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import Header from './header';
import RoomList from '../../../components/room_list';

export default class Explore extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <Header />
        <RoomList />
      </View>
    );
  }
}
