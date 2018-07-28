import { View, Text } from 'react-native';
import React, { Component } from 'react';

class MyText extends Component {
  render() {
    return <Text style={{ fontFamily: 'destain' }}>{this.props.children}</Text>;
  }
}

export { MyText };
