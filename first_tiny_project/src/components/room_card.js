import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import commonStyles from '../assets/styles';
import { CachedImage } from 'react-native-cached-image';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class RoomCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let item = this.props.item;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start'
        }}
      >
        <View style={{ paddingLeft: 10 }}>
          <TouchableOpacity>
            <CachedImage
              resizeMode="cover"
              style={{
                height: 125,
                borderRadius: 5
              }}
              source={{ uri: item.pictures[0] }}
            />

            <Text
              style={[
                commonStyles.defaultFont,
                { fontSize: 13, color: '#333', marginTop: 8 }
              ]}
            >
              {item.district.toUpperCase()}
              <Icon name="fiber-manual-record" size={6} color="#333" />
              {item.city.toUpperCase()}
            </Text>

            <Text
              numberOfLines={2}
              style={[
                commonStyles.defaultFont,
                { fontSize: 18, color: 'black', fontWeight: 'bold' }
              ]}
            >
              {item.title}
            </Text>
            <Text
              style={[
                commonStyles.defaultFont,
                commonStyles.defaultColor,
                { fontSize: 16, fontWeight: 'bold' }
              ]}
            >
              {item.price} VDN
            </Text>
          </TouchableOpacity>
          <View style={{ position: 'absolute', top: 10, right: 10 }}>
            <TouchableOpacity>
              <Icon name="favorite" size={20} color="#0aeb8b" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
