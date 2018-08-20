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

import Header from './header';
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
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <Header />
      </View>
    );
  }
}

// const Explore = () => (
//   <View style={{ backgroundColor: 'white' }}>
//     <StatusBar backgroundColor="#fff" barStyle="dark-content" />

//     <Header temp="hhh" />

//     <FlatList
//       ListHeaderComponent={() => <View style={{ height: 10 }} />}
//       ItemSeparatorComponent={() => <View style={{ height: 40 }} />}
//       ListFooterComponent={() => <View style={{ height: 90 }} />}
//       ListEmptyComponent={() => {
//         <View />;
//       }}
//       removeClippedSubviews={true}
//       data={data}
//       keyExtractor={(item, index) => index.toString()}
//       renderItem={this._renderItem}
//       numColumns={2}
//       showsVerticalScrollIndicator={false}
//     />
//   </View>
// );

// export default Explore;
// export default class Explore extends Component {
//   constructor(params) {
//     super(params);
//     this.state = { width: 0, height: 0 };
//   }

//   _renderItem = ({ item }) => (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'flex-start'
//       }}
//     >
//       <View style={{ paddingLeft: 10 }}>
//         <TouchableOpacity>
//           <CachedImage
//             resizeMode="cover"
//             style={{
//               height: 125,
//               borderRadius: 5
//             }}
//             source={{ uri: item.pictures[0] }}
//           />

//           <Text
//             style={[
//               commonStyles.defaultFont,
//               { fontSize: 13, color: '#333', marginTop: 8 }
//             ]}
//           >
//             {item.district.toUpperCase()}
//             <Icon name="fiber-manual-record" size={6} color="#333" />
//             {item.city.toUpperCase()}
//           </Text>

//           <Text
//             numberOfLines={2}
//             style={[
//               commonStyles.defaultFont,
//               { fontSize: 18, color: 'black', fontWeight: 'bold' }
//             ]}
//           >
//             {item.title}
//           </Text>
//           <Text
//             style={[
//               commonStyles.defaultFont,
//               commonStyles.defaultColor,
//               { fontSize: 16, fontWeight: 'bold' }
//             ]}
//           >
//             {item.price} VDN
//           </Text>
//         </TouchableOpacity>
//         <View style={{ position: 'absolute', top: 10, right: 10 }}>
//           <TouchableOpacity>
//             <Icon name="favorite" size={20} color="#0aeb8b" />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );

//   render() {
//     return (
//       <View style={{ flex: 1, backgroundColor: 'white' }}>
//         <StatusBar backgroundColor="#fff" barStyle="dark-content" />
//         <View style={{ height: 65 }}>
//           <View
//             style={[
//               commonStyles.defaultBackgroundColor,
//               {
//                 justifyContent: 'center',
//                 paddingLeft: 20,
//                 paddingRight: 20,
//                 flex: 1
//               }
//             ]}
//           >
//             <View
//               style={{
//                 backgroundColor: 'white',
//                 height: 40,
//                 borderRadius: 3,
//                 paddingLeft: 10,
//                 flexDirection: 'row',
//                 alignItems: 'center'
//               }}
//             >
//               <Icon name="search" size={22} />
//               <Text
//                 style={[
//                   commonStyles.defaultFont,
//                   { fontSize: 18, marginLeft: 10 }
//                 ]}
//               >
//                 Tìm kiếm
//               </Text>
//             </View>
//           </View>
//         </View>
//         <View style={{ paddingRight: 20, paddingLeft: 10 }}>
//           <FlatList
//             ListHeaderComponent={() => <View style={{ height: 10 }} />}
//             ItemSeparatorComponent={() => <View style={{ height: 40 }} />}
//             ListFooterComponent={() => <View style={{ height: 90 }} />}
//             ListEmptyComponent={() => {
//               <View />;
//             }}
//             removeClippedSubviews={true}
//             data={data}
//             keyExtractor={(item, index) => index.toString()}
//             renderItem={this._renderItem}
//             numColumns={2}
//             showsVerticalScrollIndicator={false}
//           />
//         </View>

//         <View style={{ position: 'absolute', bottom: 20, right: 20 }}>
//           <TouchableOpacity
//             onPress={() => {
//               this.props.navigateRoom();
//               //this.props.navigation.dispatch({ type: 'Room' });
//             }}
//           >
//             <View
//               style={[
//                 commonStyles.defaultBackgroundColor,
//                 {
//                   width: this.state.height,
//                   height: this.state.height,
//                   borderRadius: this.state.height / 2,
//                   alignItems: 'center',
//                   justifyContent: 'center'
//                 }
//               ]}
//             >
//               <Ionicons name="ios-add" size={65} color="white" />
//             </View>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }
