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
              backgroundColor: '#eeeeee',
              borderRadius: 5,
              flexDirection: 'row'
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: commonStyles.defaultColor,
                borderRadius: 5,
                justifyContent: 'center',
                paddingLeft: 10,
                paddingRight: 10,
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <Icon size={commonStyles.FONT_SIZE} name="search" color="#fff" />
              <Text
                style={[
                  commonStyles.defaultFont,
                  {
                    color: '#fff',
                    fontSize: commonStyles.FONT_SIZE
                  }
                ]}
              >
                Hồ Chí Minh
              </Text>
            </TouchableOpacity>
            <View style={{ width: 10 }} />

            <TouchableOpacity
              style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}
            >
              <Text
                allowFontScaling={true}
                style={[
                  commonStyles.defaultFont,

                  { fontSize: commonStyles.FONT_SIZE, marginLeft: 10 }
                ]}
              >
                Tìm kiếm
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
