import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import commonStyles from '../assets/styles';
import { CachedImage } from 'react-native-cached-image';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class EmptyData extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <View style={{ flex: 1 }} />;
  }
}
