import React, { Component } from 'react';
import { Text, View } from 'react-native';
//import styles from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Events extends Component {
  render() {
    return (
      <View>
        <Text>This is the settings entry component</Text>
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
