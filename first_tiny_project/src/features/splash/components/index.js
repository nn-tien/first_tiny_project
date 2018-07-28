import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Splash = ({ loginScreen }) => (
  <View>
    <Text>This is the splash screen!</Text>
    <Button onPress={loginScreen} title="click to go to settings" />
  </View>
);

Splash.propTypes = {
  loginScreen: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  loginScreen: () =>
    dispatch(NavigationActions.navigate({ routeName: 'Welcome' }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
