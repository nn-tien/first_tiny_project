import React, { Component } from 'react';
import { View } from 'react-native';

export default class Border extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <View style={{ height: 0.5, borderTopWidth: 0.5 }} />;
  }
}
