import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

import commonStyles from '../../../assets/styles';

export default class LoginButton extends Component {
  constructor(props) {
    super(props);
  }

  _login = () => {
    var self = this;
    this.props.loginHandle(this.props.iconName);
  };

  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: '#fff',
          height: 60,
          width: '100%',
          borderRadius: 30
        }}
        onPress={this._login}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 20,
            paddingRight: 20
          }}
        >
          <Text
            style={[commonStyles.defaultFont, { color: '#000', fontSize: 20 }]}
          >
            {this.props.title}
          </Text>
          <Icon
            name={this.props.iconName}
            size={35}
            color={this.props.iconColor}
            style={{ position: 'absolute', left: 20 }}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
