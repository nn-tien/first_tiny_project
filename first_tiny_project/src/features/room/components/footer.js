import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import commonStyles from '../../../assets/styles';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: 50,
          backgroundColor: commonStyles.defaultColor,
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onPress={this.props.onNext}
        // onPress={() => {
        //   //self.props.updateHandle('', self.props.authData.authToken);
        //   //this.setState({ step: this.state.step + 1 });
        //   //this.props.navigation.back();
        //   //this.props.navigation.dispatch(NavigationActions.back());
        // }}
      >
        <Text
          style={[
            commonStyles.defaultFont,
            {
              color: '#fff',
              fontSize: commonStyles.FONT_SIZE
            }
          ]}
        >
          Tiếp theo
        </Text>
      </TouchableOpacity>
    );
  }
}
