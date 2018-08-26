import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import { CachedImage } from 'react-native-cached-image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import commonStyles from '../../../assets/styles';
import Avatar from './../../../components/avatar';
import Border from './../../../components/border';
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
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView>
          <View style={{ height: 300, flex: 1 }}>
            <Swiper>
              <CachedImage
                style={{ flex: 1 }}
                source={{
                  uri:
                    'https://static.chotot.com.vn/1/images/3QDrXECN27wAhCZaFa8GuLoWRAS2tuuL2GVCxUixUFj5Wu1muqx5B48JvU7MUechCjhENaB.DGjvtAyYoPTqM2ajVfTrp1c22GCe2afbhhog5JvKaecf'
                }}
              />
              <CachedImage
                style={{ flex: 1 }}
                source={{
                  uri:
                    'https://static.chotot.com.vn/1/images/3QDrXECN27wAhCZaFa8GuLoWRAS2tuuL2GVCxUixUFj5Wu1muqx5B48JvU7MUechCjhENaB.DGjvtAyYoPTqM2ajVfTrp1c22GCe2afbhhog5JvKaecf'
                }}
              />
            </Swiper>
          </View>

          <View
            style={[
              commonStyles.defaultPaddingLeft,
              commonStyles.defaultPaddingRight,
              {
                paddingTop: 20,
                paddingBottom: 20
              }
            ]}
          >
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Avatar
                size={80}
                iconSize={15}
                url="https://static.chotot.com.vn/1/images/3QDrXECN27wAhCZaFa8GuLoWRAS2tuuL2GVCxUixUFj5Wu1muqx5B48JvU7MUechCjhENaB.DGjvtAyYoPTqM2ajVfTrp1c22GCe2afbhhog5JvKaecf"
              />
              <View style={{ width: 15 }} />
              <View style={{ justifyContent: 'center' }}>
                <View>
                  <Text
                    style={[
                      commonStyles.defaultFont,
                      { fontSize: 22, color: '#000' }
                    ]}
                  >
                    Nguyen Ngoc Tien
                  </Text>
                  <Text
                    style={[
                      commonStyles.defaultFont,
                      { fontSize: 13, color: '#333' }
                    ]}
                  >
                    2 ngay truoc
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <Border />

          <View
            style={[
              commonStyles.defaultPaddingLeft,
              commonStyles.defaultPaddingRight,
              { marginTop: 20 }
            ]}
          >
            <Text
              style={[
                commonStyles.defaultFont,
                { color: '#222', fontSize: 15 }
              ]}
            >
              Ho Chi Minh - Quan 12
            </Text>
            <Text
              style={[
                commonStyles.defaultFont,
                { color: '#000', fontSize: 20 }
              ]}
            >
              Phong Quan 8 o xa lang
            </Text>
            <Text
              style={[
                commonStyles.defaultFont,
                { color: '#000', fontSize: 20 }
              ]}
            >
              Phong Quan 8 o xa lang
            </Text>
            <Text
              style={[
                commonStyles.defaultFont,
                { color: '#000', fontSize: 20 }
              ]}
            >
              Phong Quan 8 o xa lang
            </Text>
            <Text
              style={[
                commonStyles.defaultFont,
                { color: '#000', fontSize: 20 }
              ]}
            >
              Phong Quan 8 o xa lang
            </Text>
            <Text
              style={[
                commonStyles.defaultFont,
                { color: '#000', fontSize: 20 }
              ]}
            >
              Phong Quan 8 o xa lang
            </Text>
            <Text
              style={[
                commonStyles.defaultFont,
                { color: '#000', fontSize: 20 }
              ]}
            >
              Phong Quan 8 o xa lang
            </Text>
            <Text
              style={[
                commonStyles.defaultFont,
                { color: '#000', fontSize: 20 }
              ]}
            >
              Phong Quan 8 o xa lang
            </Text>
            <Text
              style={[
                commonStyles.defaultFont,
                { color: '#000', fontSize: 20 }
              ]}
            >
              Phong Quan 8 o xa lang
            </Text>
            <Text
              style={[
                commonStyles.defaultFont,
                { color: '#000', fontSize: 20 }
              ]}
            >
              Phong Quan 8 o xa lang
            </Text>
            <Text
              style={[
                commonStyles.defaultFont,
                { color: '#000', fontSize: 20 }
              ]}
            >
              Phong Quan 8 o xa lang
            </Text>
            <Text
              style={[
                commonStyles.defaultFont,
                { color: '#000', fontSize: 20 }
              ]}
            >
              Phong Quan 8 o xa lang
            </Text>
          </View>

          <View style={{ height: 100 }} />

          <View
            style={{
              position: 'absolute',
              top: 0,
              width: '100%'
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 20,
                paddingTop: 20,
                paddingRight: 20
              }}
            >
              <TouchableOpacity>
                <Icon name="arrow-back" size={30} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="favorite-border" size={30} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
          <View
            style={{
              height: 70,
              borderTopWidth: 0.5,
              paddingTop: 10,
              paddingBottom: 10,
              backgroundColor: '#fff'
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 20,
                paddingRight: 20,
                justifyContent: 'space-between'
              }}
            >
              <View>
                <Text
                  style={[
                    commonStyles.defaultFont,
                    commonStyles.defaultColor,
                    { fontSize: 20 }
                  ]}
                >
                  1.000.000 VND
                </Text>
              </View>
              <View>
                <TouchableOpacity>
                  <Icon name="chat" size={50} color="#000" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
