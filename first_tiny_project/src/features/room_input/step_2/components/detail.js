import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 9.15 }}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => {
            this.props.onChangeText('text', text);
          }}
          value={this.props.room.text}
          underlineColorAndroid="transparent"
          borderBottomWidth={0.4}
          borderBottomColor="#444"
          borderWidth={0}
        />
        {/* <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={this.props.onChangeText}
          value={this.props.room.text}
          underlineColorAndroid="transparent"
          borderBottomWidth={0.4}
          borderBottomColor="#444"
          borderWidth={0}
        /> */}
      </View>
    );
  }
}
