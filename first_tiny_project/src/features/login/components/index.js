import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

import { CachedImage, ImageCacheProvider } from 'react-native-cached-image';

import commonStyles from '../../../assets/styles';
import LinearGradient from 'react-native-linear-gradient';

const images = [
  'https://i.ytimg.com/vi/yaqe1qesQ8c/maxresdefault.jpg',
  'https://i.ytimg.com/vi/yaqe1qesQ8c/maxresdefault.jpg',
  'https://i.ytimg.com/vi/yaqe1qesQ8c/maxresdefault.jpg'
];

export default class Login extends Component {
  loginWithFacebook = () => {
    this.props.login();
  };

  componentWillReceiveProps(nextProps) {
    const { rootData } = nextProps;
    if (rootData.isLogin) {
      this.props.navigation.dispatch({ type: 'Main' });
    }
  }

  render() {
    return (
      <View
        style={[
          commonStyles.defaultPaddingLeft,
          commonStyles.defaultPaddingRight
        ]}
      >
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={{
            paddingLeft: 15,
            paddingRight: 15,
            borderRadius: 5,
            height: 30,
            width: '100%'
          }}
        >
          <Text
            style={{
              fontSize: 18,
              textAlign: 'center',
              margin: 10,
              color: '#ffffff',
              backgroundColor: 'transparent'
            }}
          >
            Sign in with Facebook
          </Text>
        </LinearGradient>

        <Text style={[commonStyles.defaultFont, { fontSize: 30 }]}>
          This is the Login entry component
        </Text>
        {/* <ImageCacheProvider
          urlsToPreload={images}
          onPreloadComplete={() => console.log('hey there')}
        > */}
        <CachedImage
          style={{ width: 100, height: 100 }}
          source={{ uri: images[0] }}
        />

        <CachedImage
          style={{ width: 100, height: 100 }}
          source={{ uri: images[1] }}
        />

        <CachedImage
          style={{ width: 100, height: 100 }}
          source={{ uri: images[2] }}
        />
        {/* </ImageCacheProvider> */}
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
