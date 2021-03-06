import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

import commonStyles from '../../../assets/styles';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let self = this;
    return (
      <View style={{ flex: 9.15 }}>
        {(function() {
          if (self.props.step == 1) {
            return self._step1();
          }
        })()}
      </View>
    );
  }

  _step1() {
    return (
      <View style={{ flex: 1 }}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          //onChangeText={text => this.setState({ text })}
          //value={this.state.text}
          underlineColorAndroid="transparent"
          borderBottomWidth={0.4}
          borderBottomColor="#444"
          borderWidth={0}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          //onChangeText={text => this.setState({ text })}
          //value={this.state.text}
          underlineColorAndroid="transparent"
          borderBottomWidth={0.4}
          borderBottomColor="#444"
          borderWidth={0}
        />
      </View>
    );
  }
}
