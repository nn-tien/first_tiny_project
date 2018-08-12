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

export default class Saved extends Component {
  _renderItem = ({ item }) => (
    <View
      style={{
        width: '100%',
        justifyContent: 'flex-start'
      }}
    >
      <TouchableOpacity>
        <CachedImage
          resizeMode="cover"
          style={{
            height: 250,
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
      <View
        style={[
          commonStyles.defaultPaddingLeft,
          commonStyles.defaultPaddingRight,
          { backgroundColor: '#fff' }
        ]}
      >
        <FlatList
          ListHeaderComponent={() => (
            <View style={{ height: 100, justifyContent: 'center' }}>
              <Text
                style={[
                  commonStyles.defaultFont,
                  { fontSize: 35, color: '#000', fontWeight: 'bold' }
                ]}
              >
                Saved
              </Text>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={{ height: 40 }} />}
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
    );
  }
}
