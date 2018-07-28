import React, { Component } from 'react';
import { Text, View } from 'react-native';
//import styles from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Inbox extends Component {
  render() {
    return (
      <View>
        <Text style={{ fontFamily: 'destain' }}>
          This is the Inbox entry component
        </Text>
        <Icon.Button
          name="facebook"
          backgroundColor="#3b5998"
          onPress={this.loginWithFacebook}
        >
          Login with Facebook
        </Icon.Button>
      </View>
    );
  }
}
