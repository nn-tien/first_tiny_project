import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Login extends Component {
  loginWithFacebook = () => {
    this.props.login();
  };

  componentWillReceiveProps(nextProps) {
    const { loginData } = nextProps;
    if (loginData.isLogin) {
      this.props.navigation.dispatch({ type: 'Main' });
    }
  }

  render() {
    return (
      <View>
        <Text style={{ fontFamily: 'destain' }}>
          This is the Login entry component
        </Text>
        <Icon.Button
          name="facebook"
          backgroundColor="#3b5998"
          onPress={this.loginWithFacebook}
        >
          Login with Facebook
        </Icon.Button>
        <Icon.Button
          name="google"
          backgroundColor="#3b5998"
          onPress={this.loginWithFacebook}
        >
          Login with Google
        </Icon.Button>
      </View>
    );
  }
}
