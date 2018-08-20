import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import commonStyles from '../../../assets/styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let height = 70;

    if (this.props.height) {
      height = this.props.height;
    }

    return (
      <View style={{ height: height }}>
        <View
          style={[
            commonStyles.defaultBackgroundColor,
            {
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 12,
              paddingBottom: 12,
              flex: 1
            }
          ]}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: '#fff',
              borderRadius: 5,
              paddingLeft: 10,
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <Icon name="search" size={22} />
            <Text
              style={[
                commonStyles.defaultFont,
                { fontSize: 20, marginLeft: 10 }
              ]}
            >
              Tìm kiếm
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
