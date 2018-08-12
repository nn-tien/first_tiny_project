import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
//import styles from "./styles";
import Icon from 'react-native-vector-icons/MaterialIcons';
import commonStyles from '../../../assets/styles';
import { CachedImage } from 'react-native-cached-image';

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
    _id: 4,
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
    _id: 5,
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
    _id: 6,
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
    _id: 7,
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
    _id: 8,
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
    _id: 9,
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
    _id: 10,
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

export default class Inbox extends Component {
  _renderItem = ({ item }) => (
    <View
      style={{
        height: 75,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <TouchableOpacity
        style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}
      >
        <View style={{ flex: 0.8 }}>
          <CachedImage
            resizeMode="cover"
            style={{
              height: 60,
              width: 60,
              borderRadius: 30
            }}
            source={{ uri: item.pictures[0] }}
          />
        </View>
        <View style={{ flex: 0.5 }} />
        <View
          style={{
            flex: 3.7,
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <Text
            style={[commonStyles.defaultFont, { fontSize: 20, color: '#000' }]}
          >
            Van Tien
          </Text>
          <Text
            style={[commonStyles.defaultFont, { fontSize: 14, color: '#000' }]}
          >
            ABC
          </Text>
          <View style={{ borderBottomWidth: 0.5, borderBottomColor: '#444' }} />
        </View>
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <View
          style={{
            flex: 1,
            borderBottomWidth: 0.5,
            borderBottomColor: '#444',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <CachedImage
            resizeMode="cover"
            style={{
              height: 50,
              width: 50,
              borderRadius: 25
            }}
            source={{
              uri:
                'https://static.chotot.com.vn/1/images/3QDrXECN27wAhCZaFa8GuLoWRAS2tuuL2GVCxUixUFj5Wu1muqx5B48JvU7MUechCjhENaB.DGjvtAyYoPTqM2ajVfTrp1c22GCe2afbhhog5JvKaecf'
            }}
          />
        </View>

        <View
          style={[
            commonStyles.defaultPaddingLeft,
            commonStyles.defaultPaddingRight,
            { flex: 9 }
          ]}
        >
          <FlatList
            ListHeaderComponent={() => <View style={{ height: 10 }} />}
            ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
            ListFooterComponent={() => <View style={{ height: 30 }} />}
            ListEmptyComponent={() => {
              <View />;
            }}
            removeClippedSubviews={true}
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this._renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
}
