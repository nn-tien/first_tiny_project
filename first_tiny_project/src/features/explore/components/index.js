import React, { Component } from 'react';
import { Text, View, StatusBar, Image } from 'react-native';

import commonStyles from '../../../assets/styles';
import LinearGradient from 'react-native-linear-gradient';

import { CachedImage } from 'react-native-cached-image';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Explore extends Component {
  constructor(params) {
    super(params);
    this.state = { width: 0, height: 0 };
  }

  measureView(event) {
    this.setState({
      width: event.nativeEvent.layout.width,
      height: event.nativeEvent.layout.height
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#192f6a" barStyle="light-content" />
        <View style={{ flex: 0.8 }}>
          <LinearGradient
            onLayout={event => this.measureView(event)}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 10,
              paddingRight: 10,
              flex: 1
            }}
          >
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                flex: 1
              }}
            >
              <View
                style={{
                  flex: 1.3,
                  alignItems: 'flex-start'
                }}
              >
                <View
                  style={{
                    borderRadius: (this.state.height - 20) / 2,
                    height: this.state.height - 20,
                    width: this.state.height - 20,
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <CachedImage
                    resizeMode="cover"
                    style={{
                      height: this.state.height - 22,
                      width: this.state.height - 22,
                      borderRadius: (this.state.height - 22) / 2
                    }}
                    source={{ uri: this.props.authData.baseUser.avatar }}
                  />
                </View>
              </View>
              <View style={{ flex: 8.7 }}>
                <View
                  style={{
                    justifyContent: 'flex-start',
                    backgroundColor: 'white',
                    height: this.state.height - 20,
                    borderRadius: 3,
                    justifyContent: 'flex-start',
                    paddingLeft: 10,
                    flexDirection: 'row',
                    alignItems: 'center'
                  }}
                >
                  <Ionicons name="ios-search" size={this.state.height - 30} />
                  <Text
                    style={[
                      commonStyles.defaultFont,
                      { fontSize: this.state.height - 35, marginLeft: 10 }
                    ]}
                  >
                    Search
                  </Text>
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>
        <View style={{ flex: 9.2 }}>
          <CachedImage
            style={{ width: 20, height: 20 }}
            source={{ uri: 'https://www.gstatic.com/webp/gallery3/1.png' }}
          />
        </View>

        <View style={{ position: 'absolute', bottom: 10, right: 10 }}>
          <View
            style={{
              backgroundColor: '#3b5998',
              width: this.state.height,
              height: this.state.height,
              borderRadius: this.state.height / 2,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Ionicons name="ios-add" size={this.state.height} color="white" />
          </View>
        </View>
      </View>
    );
  }
}
