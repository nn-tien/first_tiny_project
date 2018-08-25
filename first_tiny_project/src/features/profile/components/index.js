import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

import commonStyles from '../../../assets/styles';

import { RNCamera } from 'react-native-camera';

import Header from './header';
import Border from './../../../components/border';
import Avatar from './../../../components/avatar';
import Item from './item';
import ItemAction from './item_action';

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
    this.props.navigation.navigate('Login');
    //this.props.logoutHandle();
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
      <ScrollView style={{ backgroundColor: '#fff' }}>
        <View style={{ flex: 1 }}>
          <Header />

          <View
            style={{
              position: 'absolute',
              top: 90,
              width: '100%'
            }}
          >
            <Avatar
              size={140}
              url="https://static.chotot.com.vn/1/images/3QDrXECN27wAhCZaFa8GuLoWRAS2tuuL2GVCxUixUFj5Wu1muqx5B48JvU7MUechCjhENaB.DGjvtAyYoPTqM2ajVfTrp1c22GCe2afbhhog5JvKaecf"
            />
          </View>

          <View>
            <View
              style={{
                flex: 1,
                alignItems: 'center'
              }}
            >
              <Text
                style={[
                  commonStyles.defaultFont,
                  {
                    color: '#000',
                    fontSize: 25,
                    paddingTop: 55,
                    fontWeight: 'bold'
                  }
                ]}
              >
                Nguyen Ngoc Tien
              </Text>
            </View>
          </View>

          <View
            style={[
              commonStyles.defaultPaddingLeft,
              commonStyles.defaultPaddingRight,
              { marginTop: 30 }
            ]}
          >
            <Text
              style={[
                commonStyles.defaultFont,
                { fontSize: 16, fontWeight: 'bold', color: '#999' }
              ]}
            >
              THÔNG TIN
            </Text>

            <Item title="Điện thoại" value="09980980" icon="phone-android" />
            <Border />
            <Item
              title="Email"
              value="nntien.nguyen@gmail.com"
              icon="mail-outline"
            />
            <Border />
          </View>

          <View
            style={[
              commonStyles.defaultPaddingLeft,
              commonStyles.defaultPaddingRight,
              { marginTop: 50 }
            ]}
          >
            <Text
              style={[
                commonStyles.defaultFont,
                { fontSize: 16, fontWeight: 'bold', color: '#999' }
              ]}
            >
              KHÁC
            </Text>
            <ItemAction title="Đăng phòng" icon="add-circle-outline" />
            <Border />
            <ItemAction title="Đăng tìm phòng" icon="search" />
            <Border />
            <ItemAction
              title="Thoát"
              icon="exit-to-app"
              onPress={this.logout}
            />
            <Border />
          </View>
        </View>
        <View style={{ height: 50 }} />
      </ScrollView>

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
