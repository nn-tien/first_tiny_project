import React, { Component } from 'react';
import {
  View,
  StatusBar,
  ActivityIndicator,
  ScrollView,
  FlatList,
  Text,
  TouchableOpacity
} from 'react-native';

import Header from './header';
import RoomList from './../../../containers/room_list';
import Loading from '../../../components/loading';
import commonStyles from '../../../assets/styles';
import { CachedImage } from 'react-native-cached-image';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Border from './../../../components/border';
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

var data1 = [];

export default class Explore extends Component {
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
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Header />
        <Border />

        <View style={{ flex: 1 }}>
          <ScrollView>
            <View style={{ paddingLeft: 10, paddingRight: 10 }}>
              <FlatList
                ListHeaderComponent={() => (
                  <View style={{ paddingTop: 20, paddingBottom: 20 }}>
                    <Text
                      style={[
                        commonStyles.defaultFont,
                        {
                          fontSize: commonStyles.FONT_SIZE_LARGE,
                          color: '#000'
                          // fontWeight: 'bold'
                        }
                      ]}
                    >
                      Tim kiem nhanh
                    </Text>
                    {/* <Border /> */}
                  </View>
                )}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                ListFooterComponent={() => <View style={{ height: 30 }} />}
                ListEmptyComponent={() => <EmptyData />}
                removeClippedSubviews={true}
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this._renderItem}
                numColumns={3}
                showsVerticalScrollIndicator={false}
              />
            </View>

            <View style={{ paddingLeft: 10, paddingRight: 10 }}>
              <RoomList data={data} navigation={this.props.navigation} />
            </View>

            <View style={{ paddingLeft: 10, paddingRight: 10 }}>
              <RoomList data={data} navigation={this.props.navigation} />
            </View>
            {/* {this.props.isPending ? (
              <Loading />
            ) : (
              
            )} */}
          </ScrollView>
        </View>
      </View>
    );
  }

  _renderItem = ({ item, index }) => {
    return (
      <View
        style={[
          { flex: 1, justifyContent: 'flex-start' },
          index % 3 == 0
            ? { paddingRight: 5 }
            : (index + 1) % 3 == 0
              ? { marginLeft: 5 }
              : { marginLeft: 5, paddingRight: 5 }
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            this.props.getData();
          }}
        >
          <CachedImage
            resizeMode="cover"
            style={{
              height: 120,
              borderRadius: 10
            }}
            source={{ uri: item.pictures[0] }}
          />
        </TouchableOpacity>
        <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center'
            }}
          >
            <Text
              style={[
                commonStyles.defaultFont,
                { color: '#fff', fontSize: commonStyles.FONT_SIZE }
              ]}
            >
              Quan 1
            </Text>
          </View>
        </View>
      </View>
    );
  };
}
