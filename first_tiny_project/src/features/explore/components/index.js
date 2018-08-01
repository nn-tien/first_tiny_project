import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';

import commonStyles from '../../../assets/styles';

export default class Explore extends Component {
  render() {
    return (
      <View
        style={[
          commonStyles.defaultPaddingLeft,
          commonStyles.defaultPaddingRight
        ]}
      >
        <StatusBar translucent={true} backgroundColor="transparent" />
        <Text style={{ fontFamily: 'destain' }}>
          This is the explore entry component
        </Text>
      </View>
    );
  }
}
