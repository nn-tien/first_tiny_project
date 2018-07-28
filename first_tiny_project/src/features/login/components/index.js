import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

import { CachedImage, ImageCacheProvider } from 'react-native-cached-image';

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
      <View>
        <Text style={{ fontFamily: 'destain' }}>
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
