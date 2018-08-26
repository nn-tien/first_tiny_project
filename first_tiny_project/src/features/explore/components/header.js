import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import commonStyles from '../../../assets/styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ height: 60 }}>
        <View
          style={[
            commonStyles.defaultBackgroundColor,
            {
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 10,
              paddingBottom: 10,
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
            <Icon size={commonStyles.FONT_SIZE} name="search" />
            <Text
              allowFontScaling={true}
              style={[
                commonStyles.defaultFont,

                { fontSize: commonStyles.FONT_SIZE, marginLeft: 10 }
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
