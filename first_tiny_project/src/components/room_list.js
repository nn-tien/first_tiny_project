import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import RoomCard from './../containers/room_card';

import commonStyles from '../assets/styles';
import EmptyData from './empty_data';
import Border from './../components/border';

export default class RoomList extends Component {
  constructor(props) {
    super(props);
  }

  _renderItem = ({ item, index }) => {
    return (
      <RoomCard item={item} index={index} navigation={this.props.navigation} />
    );
  };

  render() {
    let { data } = this.props;
    return (
      <FlatList
        ListHeaderComponent={() => (
          <View style={{ paddingTop: 10, paddingBottom: 10 }}>
            <Text
              style={[
                commonStyles.defaultFont,
                {
                  fontSize: commonStyles.FONT_SIZE_LARGE,
                  color: '#000',
                  fontWeight: 'bold'
                }
              ]}
            >
              Phòng mới đăng
            </Text>
            <Border />
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 40 }} />}
        ListFooterComponent={() => <View style={{ height: 30 }} />}
        ListEmptyComponent={() => <EmptyData />}
        removeClippedSubviews={true}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this._renderItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    );
  }
}
