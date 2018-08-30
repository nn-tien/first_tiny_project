import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import commonStyles from '../assets/styles';
import { CachedImage } from 'react-native-cached-image';
import Icon from 'react-native-vector-icons/MaterialIcons';

import customData from '../data/quan_huyen.json';

export default class RoomCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { item, index } = this.props;
    return (
      <View
        style={[
          { flex: 1, justifyContent: 'flex-start' },
          index % 2 == 0 ? { paddingRight: 5 } : { marginLeft: 5 }
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            this.props.getData();
          }}
        >
          <CachedImage
            resizeMode="cover"
            style={{
              height: 125,
              borderRadius: 5
            }}
            source={{ uri: item.images[0] }}
          />

          <View style={{ paddingTop: 5 }}>
            <Text
              style={[
                commonStyles.defaultFont,
                {
                  fontSize: commonStyles.FONT_SIZE_SMALLER,
                  color: '#111',
                  marginTop: 8
                }
              ]}
            >
              {customData[item.district].name_with_type}
            </Text>
          </View>
          <View style={{ paddingTop: 5 }}>
            <Text
              numberOfLines={2}
              style={[
                commonStyles.defaultFont,
                {
                  fontSize: commonStyles.FONT_SIZE,
                  color: 'black',
                  fontWeight: 'bold',
                  lineHeight: 22
                }
              ]}
            >
              {item.title}
            </Text>
          </View>
          <View style={{ paddingTop: 5 }}>
            <Text
              style={[
                commonStyles.defaultFont,
                { fontSize: commonStyles.FONT_SIZE_SMALL, fontWeight: 'bold' },
                { color: commonStyles.defaultColor }
              ]}
            >
              {item.price} VND / nguoi
            </Text>
          </View>
          <View style={{ paddingTop: 5 }}>
            <Text
              numberOfLines={2}
              style={[
                commonStyles.defaultFont,
                {
                  fontSize: commonStyles.FONT_SIZE,
                  color: 'black',
                  lineHeight: 22
                }
              ]}
            >
              {item.address}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{ position: 'absolute', top: 10, right: 10 }}>
          <TouchableOpacity>
            <Icon
              name="favorite"
              size={commonStyles.FONT_SIZE_TITLE}
              color={commonStyles.defaultColor}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
