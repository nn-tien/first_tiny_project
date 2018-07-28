import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Layout from './components/layout';
import { AppNavigator } from './navigation/containers';
import myStore from './myStore';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader'
]);

export default class MyApp extends Component {
  render() {
    return (
      <Provider store={myStore}>
        <Layout>
          <AppNavigator />
        </Layout>
      </Provider>
    );
  }
}
