import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';

import LinearGradient from 'react-native-linear-gradient';

import LoginButton from '../containers/button_login';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: 30,
            paddingRight: 30
          }}
        >
          <LoginButton
            iconName="facebook"
            iconColor="#3b5998"
            title="Sign in with Facebook"
          />

          <View style={{ height: 10 }} />

          <LoginButton
            iconName="google"
            iconColor="#dd4b39"
            title="Sign in with Goole"
          />
        </LinearGradient>
      </View>
    );
  }
}
