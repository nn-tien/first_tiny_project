import React, { Component } from 'react';
import { Text, View } from 'react-native';

import commonStyles from '../../../assets/styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          paddingTop: 20,
          paddingBottom: 20,
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Icon name={this.props.icon} size={30} color="#000" />
          <View style={{ width: 5 }} />
          <Text
            style={[commonStyles.defaultFont, { color: '#000', fontSize: 20 }]}
          >
            {this.props.title}
          </Text>
        </View>
        <Text
          style={[commonStyles.defaultFont, { color: '#000', fontSize: 20 }]}
        >
          {this.props.value}
        </Text>
      </View>
    );
  }
}
