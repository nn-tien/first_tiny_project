import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, View, TextInput, TouchableOpacity, Picker } from 'react-native';

// import commonStyles from '../../../assets/styles';
import LinearGradient from 'react-native-linear-gradient';

import { CachedImage } from 'react-native-cached-image';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
// import { postApi } from '../../../api';
import { BackHandler } from 'react-native';

import Footer from './../containers/footer';
import Header from './../containers/header';
import Detail from './../containers/detail';

export default class Room extends Component {
  constructor(props) {
    super(props);
    this.state = { step: 1, room: {} };
  }

  //   componentDidMount() {
  //     BackHandler.addEventListener('backPress', () => {
  //       if (this.state.step > 1) {
  //         this.setState({ step: this.state.step - 1 });
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     });
  //   }

  //   componentWillUnmount() {
  //     BackHandler.removeEventListener('backPress');
  //   }

  render() {
    var self = this;
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Header
          step={this.state.step}
          onPre={this._pre}
          onClose={this._close}
        />
        <Detail step={this.state.step} room={this.state.room} />
        <Footer onNext={this._next} />
      </View>
    );
  }

  _next = () => {
    //this.setState({ step: this.state.step + 1 });
  };

  _pre = () => {
    //this.setState({ step: this.state.step - 1 });
  };

  _close = () => {
    //this.props.navigation.goBack();
  };
}
