import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Profile extends Component {
  logout = () => {
    this.props.logout();
    //this.props.navigation.goBack();
    this.props.navigation.dispatch({ type: 'LOGIN1' });
  };

  render() {
    return (
      <View>
        <Text style={{ fontFamily: 'destain' }}>
          This is the Profile entry component
        </Text>
        <Icon.Button
          name="facebook"
          backgroundColor="#3b5998"
          onPress={this.logout}
        >
          Login with Facebook
        </Icon.Button>
      </View>
    );
  }
}
