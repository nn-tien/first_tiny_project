import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import commonStyles from '../../../assets/styles';
import LinearGradient from 'react-native-linear-gradient';

import { CachedImage } from 'react-native-cached-image';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { postApi } from '../../../api';

export default class Room extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          underlineColorAndroid="transparent"
          borderBottomWidth={0.4}
          borderBottomColor="#444"
          borderWidth={0}
        />

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          underlineColorAndroid="transparent"
          borderBottomWidth={0.4}
          borderBottomColor="#444"
          borderWidth={0}
        />

        <View style={{ position: 'absolute', bottom: 10, left: 10 }}>
          <TouchableOpacity
            onPress={() => {
              postApi('http://192.168.0.101:3000/api/room/insert', {
                accessToken: 'data.accessToken.toString()',
                loginWith: 'facebook'
              }).then(val => {
                console.log(val.user);
                //self.props.login(val.authToken, val.user);
              });

              //this.props.navigation.back();
              //this.props.navigation.dispatch(NavigationActions.back());
            }}
          >
            <View
              style={{
                backgroundColor: '#3b5998',
                width: 60,
                height: 60,
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Ionicons name="ios-add" size={60} color="white" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ position: 'absolute', bottom: 10, right: 10 }}>
          <TouchableOpacity
            onPress={() => {
              //this.props.navigation.back();
              this.props.navigation.dispatch(NavigationActions.back());
            }}
          >
            <View
              style={{
                backgroundColor: '#3b5998',
                width: 60,
                height: 60,
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Ionicons name="ios-add" size={60} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
