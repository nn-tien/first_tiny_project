import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#192f6a', '#3b5998', '#4c669f']}
        style={{
          height: 200
        }}
      />
    );
  }
}
