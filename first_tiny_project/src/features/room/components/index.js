import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, View, TextInput, TouchableOpacity, Picker } from 'react-native';

import commonStyles from '../../../assets/styles';
import LinearGradient from 'react-native-linear-gradient';

import { CachedImage } from 'react-native-cached-image';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { postApi } from '../../../api';

const headerIcon = step => {
  if (step == 1) {
    return <Icon name="clear" size={30} color="black" />;
  } else {
    return <Icon name="arrow-back" size={30} color="black" />;
  }
};

const headerTitle = step => {
  var title = '';
  if (step == 1) {
    title = 'Buoc 1: Dia Chi';
  } else if (step == 2) {
    title = 'Buoc 2: Loai phong';
  } else {
    title = 'Buoc 3: Tien ich';
  }

  return (
    <Text
      style={
        (commonStyles.defaultFont,
        { fontWeight: 'bold', fontSize: 25, color: '#000', marginLeft: 15 })
      }
    >
      {title}
    </Text>
  );
};

export default class Room extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder', step: 1 };
  }

  render() {
    var self = this;
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={{ flex: 0.8 }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 15
            }}
          >
            <TouchableOpacity
              onPress={() => {
                if (self.state.step > 1) {
                  this.setState({ step: this.state.step - 1 });
                } else {
                  this.props.navigateBack();
                  //this.props.navigation.dispatch({ type: 'BACK' });
                  //this.props.navigation.dispatch(NavigationActions.back());
                }
              }}
            >
              {headerIcon(self.state.step)}
            </TouchableOpacity>
            {headerTitle(self.state.step)}
          </View>
        </View>

        <View style={{ flex: 0.05, backgroundColor: 'yellow' }} />

        <View style={{ flex: 9.15 }}>
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

          <Picker
            selectedValue={this.state.language}
            style={{ height: 50 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })
            }
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>

          <Picker
            selectedValue={this.state.language}
            style={{ height: 50 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })
            }
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>

        {/* <View style={{ position: 'absolute', bottom: 10, left: 10 }}>
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
        </View> */}

        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: 60,
            backgroundColor: '#00e68a',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onPress={() => {
            this.setState({ step: this.state.step + 1 });
            //this.props.navigation.back();
            //this.props.navigation.dispatch(NavigationActions.back());
          }}
        >
          <Text
            style={[
              commonStyles.defaultFont,
              { color: 'white', fontSize: 18, fontWeight: 'bold' }
            ]}
          >
            Next
          </Text>
        </TouchableOpacity>

        {/* <View style={{ position: 'absolute', bottom: 10, right: 10 }}>
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
        </View> */}
      </View>
    );
  }
}
