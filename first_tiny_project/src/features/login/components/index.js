import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

import commonStyles from '../../../assets/styles';
import LinearGradient from 'react-native-linear-gradient';
import { GoogleSignin } from 'react-native-google-signin';

import { postApi } from '../../../api';

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

    postApi('http://192.168.0.101:3000/api/user/login', {
      accessToken: '',
      loginWith: 'facebook'
    }).then(val => {
      console.log(val);
      self.props.login('data.accessToken.toString()', 'facebook');
    });

    // LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
    //   function(result) {
    //     if (result.isCancelled) {
    //     } else {
    //       AccessToken.getCurrentAccessToken()
    //         .then(data => {
    //           postApi('http://localhost:3000/api/user/login', {
    //             accessToken: data.accessToken.toString(),
    //             loginWith: 'facebook'
    //           }).then(val => {
    //             console.log(val);
    //             self.props.login(data.accessToken.toString(), 'facebook');
    //           });
    //           //console.log(data.accessToken.toString());
    //           //alert(data.accessToken.toString());
    //           //self.props.login(data.accessToken.toString(), 'facebook');
    //         })
    //         .catch(err => {})
    //         .done();
    //     }
    //   },
    //   function(error) {}
    // );
  };

  loginWithGoogle = () => {
    GoogleSignin.signIn()
      .then(user => {
        this.props.login(user.accessToken, 'google');
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
        '696579097721-h6eeajp2maj7j6ajddiuqau8j3f88ti8.apps.googleusercontent.com',
      offlineAccess: false
    });
  }

  componentWillReceiveProps(nextProps) {
    const { authData } = nextProps;
    if (authData.isLogin) {
      this.props.navigation.dispatch({ type: 'Main' });
    }
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

          <ActivityIndicator size="large" color="#0000ff" animating={false} />
        </LinearGradient>
      </View>
    );
  }
}
