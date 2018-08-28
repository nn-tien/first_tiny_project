import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import commonStyles from '../../../../assets/styles';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          height: 50,
          justifyContent: 'center'
        }}
      >
        <View
          style={{
            flex: 1,
            paddingLeft: 20,
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <TouchableOpacity
            onPress={
              this.props.step == 1 ? this.props.onClose : this.props.onPre
            }
          >
            <Icon
              name="close"
              size={commonStyles.FONT_SIZE_LARGER}
              color="black"
            />
          </TouchableOpacity>
          <View>
            <Text
              style={[
                commonStyles.defaultFont,
                { color: '#000', fontSize: commonStyles.FONT_SIZE_LARGE }
              ]}
            >
              Buoc 1
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
