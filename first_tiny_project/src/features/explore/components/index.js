import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  FlatList,
  TouchableOpacity
} from 'react-native';

import commonStyles from '../../../assets/styles';
import LinearGradient from 'react-native-linear-gradient';

import { CachedImage } from 'react-native-cached-image';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
var data = [
  {
    _id: 1,
    title: 'Nhan vo cung sach se, rat dep, vo o thich lien',
    price: '1,000,000',
    address: '',
    district: 'Quan 1',
    city: 'Ho Chi Minh',
    pictures: [
      'https://static.chotot.com.vn/1/images/3QDrXECN27wAhCaX5sJpxd9zQ2A5aqgqxwQ9d614Hae98CQ7pQDSFGFPxkNqKeMv6E2nUKh.43ebZzzVReYLutn7S18DD1sUxigfVLh9ndiouherZuV7'
    ]
  },
  {
    _id: 2,
    title: 'Nhan sang dep, quan 2 vo o lien',
    price: '1,000,000',
    address: '',
    district: 'Quan 2',
    city: 'Ho Chi Minh',
    pictures: [
      'https://static.chotot.com.vn/1/images/3QDrXECN27wANnSDUJgbu3b6MUEATPx5CDcWpb8sragqpRkeYbb7SdBRqczCrgfjdTLgQhm.EGyXKaZXG9PHtEUm77ULPwkQA3Pp5HxzRRRk9y6wz6X6'
    ]
  },
  {
    _id: 3,
    title: 'Nha de long lanh quan 7',
    price: '1,000,000',
    address: '',
    district: 'Quan 2',
    city: 'Ho Chi Minh',
    pictures: [
      'https://static.chotot.com.vn/1/images/3QDrXECN27wAhCZaFa8GuLoWRAS2tuuL2GVCxUixUFj5Wu1muqx5B48JvU7MUechCjhENaB.DGjvtAyYoPTqM2ajVfTrp1c22GCe2afbhhog5JvKaecf'
    ]
  },
  {
    _id: 3,
    title: 'Nha de long lanh quan 7',
    price: '1,000,000',
    address: '',
    district: 'Quan 2',
    city: 'Ho Chi Minh',
    pictures: [
      'https://static.chotot.com.vn/1/images/3QDrXECN27wAhCZaFa8GuLoWRAS2tuuL2GVCxUixUFj5Wu1muqx5B48JvU7MUechCjhENaB.DGjvtAyYoPTqM2ajVfTrp1c22GCe2afbhhog5JvKaecf'
    ]
  },
  {
    _id: 3,
    title: 'Nha de long lanh quan 7',
    price: '1,000,000',
    address: '',
    district: 'Quan 2',
    city: 'Ho Chi Minh',
    pictures: [
      'https://static.chotot.com.vn/1/images/3QDrXECN27wAhCZaFa8GuLoWRAS2tuuL2GVCxUixUFj5Wu1muqx5B48JvU7MUechCjhENaB.DGjvtAyYoPTqM2ajVfTrp1c22GCe2afbhhog5JvKaecf'
    ]
  },
  {
    _id: 3,
    title: 'Nha de long lanh quan 7',
    price: '1,000,000',
    address: '',
    district: 'Quan 2',
    city: 'Ho Chi Minh',
    pictures: [
      'https://static.chotot.com.vn/1/images/3QDrXECN27wAhCZaFa8GuLoWRAS2tuuL2GVCxUixUFj5Wu1muqx5B48JvU7MUechCjhENaB.DGjvtAyYoPTqM2ajVfTrp1c22GCe2afbhhog5JvKaecf'
    ]
  },
  {
    _id: 3,
    title: 'Nha de long lanh quan 7',
    price: '1,000,000',
    address: '',
    district: 'Quan 2',
    city: 'Ho Chi Minh',
    pictures: [
      'https://static.chotot.com.vn/1/images/3QDrXECN27wAhCZaFa8GuLoWRAS2tuuL2GVCxUixUFj5Wu1muqx5B48JvU7MUechCjhENaB.DGjvtAyYoPTqM2ajVfTrp1c22GCe2afbhhog5JvKaecf'
    ]
  },
  {
    _id: 3,
    title: 'Nha de long lanh quan 7',
    price: '1,000,000',
    address: '',
    district: 'Quan 2',
    city: 'Ho Chi Minh',
    pictures: [
      'https://static.chotot.com.vn/1/images/3QDrXECN27wAhCZaFa8GuLoWRAS2tuuL2GVCxUixUFj5Wu1muqx5B48JvU7MUechCjhENaB.DGjvtAyYoPTqM2ajVfTrp1c22GCe2afbhhog5JvKaecf'
    ]
  },
  {
    _id: 3,
    title: 'Nha de long lanh quan 7',
    price: '1,000,000',
    address: '',
    district: 'Quan 2',
    city: 'Ho Chi Minh',
    pictures: [
      'https://static.chotot.com.vn/1/images/3QDrXECN27wAhCZaFa8GuLoWRAS2tuuL2GVCxUixUFj5Wu1muqx5B48JvU7MUechCjhENaB.DGjvtAyYoPTqM2ajVfTrp1c22GCe2afbhhog5JvKaecf'
    ]
  }
];

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
  _keyExtractor = (item, index) => item._id;
  _renderItem = ({ item }) => (
    <View
      style={{
        width: (this.state.width - 30) / 2,
        paddingLeft: 10,
        justifyContent: 'flex-start'
      }}
    >
      <TouchableOpacity>
        <CachedImage
          resizeMode="cover"
          style={{
            height: ((this.state.width - 30) / 2) * 0.7,
            borderRadius: 5
          }}
          source={{ uri: item.pictures[0] }}
        />

        <Text
          style={[
            commonStyles.defaultFont,
            { fontSize: 15, color: '#333', marginTop: 8 }
          ]}
        >
          {item.district.toUpperCase()}
          <Icon name="fiber-manual-record" size={6} color="#333" />
          {item.city.toUpperCase()}
        </Text>

        <Text
          numberOfLines={2}
          style={[
            commonStyles.defaultFont,
            { fontSize: 18, color: 'black', fontWeight: 'bold' }
          ]}
        >
          {item.title}
        </Text>
        <Text
          style={[
            commonStyles.defaultFont,
            commonStyles.defaultColor,
            { fontSize: 16, fontWeight: 'bold' }
          ]}
        >
          {item.price} VDN
        </Text>
      </TouchableOpacity>
      <View style={{ position: 'absolute', top: 10, right: 10 }}>
        <TouchableOpacity>
          <Icon name="favorite" size={20} color="#0aeb8b" />
        </TouchableOpacity>
      </View>
    </View>
  );

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <StatusBar backgroundColor="#08c473" barStyle="light-content" />
        <View style={{ flex: 0.8 }}>
          <View
            onLayout={event => this.measureView(event)}
            style={[
              commonStyles.defaultBackgroundColor,
              {
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: 20,
                paddingRight: 20,
                flex: 1
              }
            ]}
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
                  {/* <CachedImage
                    resizeMode="cover"
                    style={{
                      height: this.state.height - 22,
                      width: this.state.height - 22,
                      borderRadius: (this.state.height - 22) / 2
                    }}
                    source={{ uri: this.props.authData.baseUser.avatar.url }}
                  /> */}
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
                  <Icon name="search" size={this.state.height - 30} />
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
          </View>
        </View>
        <View
          style={{
            flex: 9.2,
            paddingTop: 10,
            paddingLeft: 10
          }}
        >
          <FlatList
            ItemSeparatorComponent={() => <View style={{ height: 40 }} />}
            ListEmptyComponent={() => {
              <View />;
            }}
            removeClippedSubviews={true}
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this._renderItem}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View style={{ position: 'absolute', bottom: 20, right: 20 }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.dispatch({ type: 'Room' });
            }}
          >
            <View
              style={[
                commonStyles.defaultBackgroundColor,
                {
                  width: this.state.height,
                  height: this.state.height,
                  borderRadius: this.state.height / 2,
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              ]}
            >
              <Ionicons name="ios-add" size={this.state.height} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
