import React, { Component } from 'react';
import { Text, View, TextInput, Slider } from 'react-native';

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

          if (self.props.step == 2) {
            return self._step2();
          }

          if (self.props.step == 3) {
            return self._step3();
          }

          if (self.props.step == 4) {
            return self._step4();
          }

          if (self.props.step == 5) {
            return self._step5();
          }
        })()}
      </View>
    );
  }

  _step1 = () => {
    let self = this;
    return (
      <View style={{ flex: 1 }}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => {
            self.props.onChangeText('text', text);
          }}
          value={self.props.room.text}
          underlineColorAndroid="transparent"
          borderBottomWidth={0.4}
          borderBottomColor="#444"
          borderWidth={0}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => {
            self.props.onChangeText('text1', text);
          }}
          value={self.props.room.text1}
          underlineColorAndroid="transparent"
          borderBottomWidth={0.4}
          borderBottomColor="#444"
          borderWidth={0}
        />
      </View>
    );
  };

  _step2 = () => {
    let self = this;
    return (
      <View style={{ flex: 1 }}>
        <Text>dfjdslkfjdsl</Text>
        <Text>{self.props.room.price}</Text>
        <Slider
          minimumValue={10}
          maximumValue={50}
          onValueChange={value => {
            self.props.onChangeText('price', value);
          }}
          value={self.props.room.price}
          step={1}
        />
      </View>
    );
  };

  _step3 = () => {
    let self = this;
    return (
      <View style={{ flex: 1 }}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => {
            self.props.onChangeText('text2', text);
          }}
          value={self.props.room.text2}
          underlineColorAndroid="transparent"
          borderBottomWidth={0.4}
          borderBottomColor="#444"
          borderWidth={0}
        />
      </View>
    );
  };

  _step4 = () => {
    let self = this;
    return (
      <View style={{ flex: 1 }}>
        <Text>{this.props.room.text}</Text>
        <Text>{this.props.room.text1}</Text>
        <Text>{this.props.room.text2}</Text>
        <Text>{this.props.room.price}</Text>
      </View>
    );
  };

  _step5 = () => {
    let self = this;
    return (
      <View style={{ flex: 1 }}>
        <Text>{this.props.room.text}</Text>
        <Text>{this.props.room.text1}</Text>
        <Text>{this.props.room.text2}</Text>
        <Text>{this.props.room.price}</Text>
      </View>
    );
  };
}
