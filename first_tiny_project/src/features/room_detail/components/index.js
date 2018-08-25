import React, { Component } from 'react';
import { View, StatusBar, ScrollView } from 'react-native';

export default class RoomDetail extends Component {
  constructor(props) {
    super(props);

    this.props.isPending = true;
  }

  componentDidMount() {
    var self = this;

    self.props.getData();
  }

  render() {
    return (
      <ScrollView>
        <View style={{ backgroundColor: 'white', flex: 1 }} />
      </ScrollView>
    );
  }
}
