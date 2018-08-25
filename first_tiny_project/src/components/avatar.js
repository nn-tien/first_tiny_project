import React, { Component } from 'react';
import { View } from 'react-native';
import { CachedImage } from 'react-native-cached-image';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Avatar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View>
          <CachedImage
            style={{
              height: this.props.size,
              width: this.props.size,
              borderRadius: this.props.size / 2
            }}
            source={{
              uri: this.props.url
            }}
          />
          <View style={{ position: 'absolute', bottom: 10, right: 6 }}>
            <Icon name="brightness-1" size={25} color="#0aeb8b" />
          </View>
        </View>
      </View>
    );
  }
}
