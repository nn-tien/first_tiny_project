import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import RoomCard from './room_card';
import { StyleSheet } from 'react-native';

import EmptyData from './empty_data';

export default class RoomList extends Component {
  constructor(props) {
    super(props);
  }

  _renderItem = ({ item, index }) => {
    return <RoomCard item={item} index={index} />;
  };

  render() {
    let { data } = this.props;
    return (
      <FlatList
        ListHeaderComponent={() => <View style={{ height: 10 }} />}
        ItemSeparatorComponent={() => <View style={{ height: 40 }} />}
        ListFooterComponent={() => <View style={{ height: 90 }} />}
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
