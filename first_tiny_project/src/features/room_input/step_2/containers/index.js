import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

import Footer from './../containers/footer';
import Header from './../containers/header';
import Detail from './../containers/detail';

export default class Room extends Component {
  constructor(props) {
    super(props);
    this.state = { room: {} };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Header onClose={this._close} />
        <Detail room={this.state.room} onChangeText={this._handleChange} />
        <Footer onNext={this._next} />
      </View>
    );
  }

  _handleChange = (event, value) => {
    this.setState({ ...this.state.room, [event]: value });
  };

  _next = () => {
    //this.setState({ step: this.state.step + 1 });
  };

  _pre = () => {
    //this.setState({ step: this.state.step - 1 });
  };

  _close = () => {
    this.props.navigation.goBack();
  };
}
