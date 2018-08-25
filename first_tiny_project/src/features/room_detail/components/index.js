import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import { CachedImage } from 'react-native-cached-image';
export default class RoomDetail extends Component {
  constructor(props) {
    super(props);

    this.props.isPending = true;
  }

  componentDidMount() {
    var self = this;

    self.props.getData();
  }

  render() {
    return (
      <ScrollView>
        <View style={{ backgroundColor: 'white', flex: 1 }}>
          <Swiper style={{ height: 200 }}>
            <CachedImage
              resizeMode="cover"
              style={{ height: 200 }}
              source={{
                uri:
                  'https://static.chotot.com.vn/1/images/3QDrXECN27wAhCZaFa8GuLoWRAS2tuuL2GVCxUixUFj5Wu1muqx5B48JvU7MUechCjhENaB.DGjvtAyYoPTqM2ajVfTrp1c22GCe2afbhhog5JvKaecf'
              }}
            />
            <CachedImage
              resizeMode="cover"
              style={{ height: 200 }}
              source={{
                uri:
                  'https://static.chotot.com.vn/1/images/3QDrXECN27wAhCZaFa8GuLoWRAS2tuuL2GVCxUixUFj5Wu1muqx5B48JvU7MUechCjhENaB.DGjvtAyYoPTqM2ajVfTrp1c22GCe2afbhhog5JvKaecf'
              }}
            />
          </Swiper>
        </View>
      </ScrollView>
    );
  }
}
