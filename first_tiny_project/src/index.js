import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Layout from './components/layout';
import { AppNavigator } from './navigation/containers';
import { store, persistor } from './myStore';
import { PersistGate } from 'redux-persist/integration/react';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader'
]);

export default class MyApp extends Component {
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
