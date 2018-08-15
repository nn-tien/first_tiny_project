import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import commonStyles from '../../../assets/styles';
import LinearGradient from 'react-native-linear-gradient';

import { CachedImage } from 'react-native-cached-image';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RNCamera } from 'react-native-camera';

export default class Profile extends Component {
  logout = () => {
    //console.log(this.props.authData.authToken);
    this.props.logout();
    this.props.navigateLogin();
    //this.props.navigation.dispatch({ type: 'SCREEN_LOGIN' });
  };

  takePicture = async () => {
    try {
      if (this.camera) {
        const options = { quality: 0.5, base64: true };
        const data = await this.camera.takePictureAsync(options);
        console.log(data.uri);
      } else {
        console.log('data.uri');
      }
    } catch (err) {
      console.log('err: ', err);
    }
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={{ position: 'absolute', bottom: 20, right: 20 }}>
          <TouchableOpacity
            // onPress={() => {
            //   this.props.navigation.dispatch({ type: 'Room' });
            // }}
            onPress={this.logout}
          >
            <View
              style={[
                commonStyles.defaultBackgroundColor,
                {
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              ]}
            >
              <Ionicons name="ios-add" size={60} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      // <View style={styles.container}>
      //   <RNCamera
      //     ref={ref => {
      //       this.camera = ref;
      //     }}
      //     style={styles.preview}
      //     type={RNCamera.Constants.Type.back}
      //     flashMode={RNCamera.Constants.FlashMode.on}
      //     permissionDialogTitle={'Permission to use camera'}
      //     permissionDialogMessage={
      //       'We need your permission to use your camera phone'
      //     }
      //   />
      //   <View
      //     style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}
      //   >
      //     <TouchableOpacity
      //       onPress={this.takePicture.bind(this)}
      //       style={styles.capture}
      //     >
      //       <Text style={{ fontSize: 14 }}> SNAP </Text>
      //     </TouchableOpacity>
      //   </View>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});
