import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import Layout from './components/layout';
//import { AppNavigator } from './navigation/containers';

import RootNavigator from './navigation/navigators';

import { PersistGate } from 'redux-persist/integration/react';
import { NavigationActions } from 'react-navigation';
import { YellowBox, StatusBar } from 'react-native';
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader'
]);

import { BackHandler } from 'react-native';
import { GoogleSignin } from 'react-native-google-signin';
import { store, persistor } from './myStore';

export default class MyApp extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    BackHandler.addEventListener('backPress', () => {
      const { nav } = store.getState();
      if (nav.index == 0) return false;
      store.dispatch(NavigationActions.back());
      return true;
    });

    await this._configureGoogleSignIn();
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('backPress');
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootNavigator />
        </PersistGate>
      </Provider>
    );
  }

  async _configureGoogleSignIn() {
    await GoogleSignin.hasPlayServices({ autoResolve: true });

    await GoogleSignin.configure({
      webClientId:
        '951145991734-r06ggum4lfqivdcrti2qkd85gpflo7nh.apps.googleusercontent.com',
      offlineAccess: false
    });
  }
}
