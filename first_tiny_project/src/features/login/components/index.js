import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

import commonStyles from '../../../assets/styles';
import LinearGradient from 'react-native-linear-gradient';
import { GoogleSignin } from 'react-native-google-signin';

import { postApi } from '../../../api';
import urlApi from '../../../api/constants';

const FBSDK = require('react-native-fbsdk');
const { AccessToken, LoginManager } = FBSDK;

const LoginButton = ({ iconName, iconColor, title, clickEvent }) => (
  <TouchableOpacity
    style={{
      backgroundColor: '#fff',
      height: 60,
      width: '100%',
      borderRadius: 30
    }}
    onPress={clickEvent}
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
      <Text style={[commonStyles.defaultFont, { color: '#000', fontSize: 20 }]}>
        {title}
      </Text>
      <Icon
        name={iconName}
        size={35}
        color={iconColor}
        style={{ position: 'absolute', left: 20 }}
      />
    </View>
  </TouchableOpacity>
);

export default class Login extends Component {
  loginWithFacebook = () => {
    var self = this;
    LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
      function(result) {
        if (result.isCancelled) {
        } else {
          AccessToken.getCurrentAccessToken()
            .then(data => {
              self.props.loginHandle(data.accessToken.toString(), 'facebook');
            })
            .catch(err => {})
            .done();
        }
      },
      function(error) {}
    );
  };

  loginWithGoogle = () => {
    var self = this;

    GoogleSignin.signIn()
      .then(user => {
        self.props.loginHandle(user.accessToken.toString(), 'google');
        // postApi(urlApi.login, {
        //   accessToken: user.accessToken.toString(),
        //   loginWith: 'google'
        // }).then(val => {
        //   self.props.login(val.authToken, val.user);
        //   self.props.navigateMain();
        // });
      })
      .catch(err => {})
      .done();
  };

  async componentDidMount() {
    this._configureGoogleSignIn();
  }

  async _configureGoogleSignIn() {
    await GoogleSignin.hasPlayServices({ autoResolve: true });

    await GoogleSignin.configure({
      webClientId:
        '951145991734-r06ggum4lfqivdcrti2qkd85gpflo7nh.apps.googleusercontent.com',
      offlineAccess: false
    });
  }

  componentWillReceiveProps(nextProps) {
    // const { authData } = nextProps;
    // if (authData.authData != '') {
    //   this.props.navigateMain();
    //   //this.props.navigation.dispatch({ type: 'Main' });
    // }
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
            clickEvent={this.loginWithFacebook}
          />

          <View style={{ height: 10 }} />

          <LoginButton
            iconName="google"
            iconColor="#dd4b39"
            title="Sign in with Goole"
            clickEvent={this.loginWithGoogle}
          />

          {this.props.actionData.isPending && <Text>Loading</Text>}
          {/* <ActivityIndicator
            size="large"
            color="#0000ff"
            animating={this.props.actionData.isPending}
          /> */}
        </LinearGradient>
      </View>
    );
  }
}
