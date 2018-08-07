import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Layout from './components/layout';
import { AppNavigator } from './navigation/containers';
import { store, persistor } from './myStore';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationActions } from 'react-navigation';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader'
]);

import { BackHandler } from 'react-native';

export default class MyApp extends Component {
  componentDidMount() {
    BackHandler.addEventListener('backPress', () => {
      const { nav } = store.getState();
      if (nav.index == 0) return false;
      store.dispatch(NavigationActions.back());
      return true;
    });
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('backPress');
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <AppNavigator />
          </Layout>
        </PersistGate>
      </Provider>
    );
  }
}
