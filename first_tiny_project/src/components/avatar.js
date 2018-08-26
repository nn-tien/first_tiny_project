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
      <View
        style={{
          height: this.props.size,
          width: this.props.size
        }}
      >
        <CachedImage
          style={{
            flex: 1,
            borderRadius: this.props.size / 2
          }}
          source={{
            uri: this.props.url
          }}
        />
        <View style={{ position: 'absolute', bottom: 10, right: 3 }}>
          <Icon
            name="brightness-1"
            size={this.props.iconSize}
            color="#0aeb8b"
          />
        </View>
      </View>
    );
  }
}
