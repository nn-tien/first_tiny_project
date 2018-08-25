import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import commonStyles from '../../../assets/styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class ItemAction extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View
          style={{
            flex: 1,
            paddingTop: 20,
            paddingBottom: 20,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Icon name={this.props.icon} size={30} color="#000" />
            <View style={{ width: 5 }} />
            <Text
              style={[
                commonStyles.defaultFont,
                { color: '#000', fontSize: 20 }
              ]}
            >
              {this.props.title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
