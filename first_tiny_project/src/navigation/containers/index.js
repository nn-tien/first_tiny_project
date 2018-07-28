// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import ApplicationNavigator from '../navigators';

// import {
//   reduxifyNavigator,
//   createReactNavigationReduxMiddleware
// } from 'react-navigation-redux-helpers';

// const middleware = createReactNavigationReduxMiddleware(
//   'root',
//   state => state.nav
// );

// const AppWithNavigationState = reduxifyNavigator(ApplicationNavigator, 'root');

// const mapStateToProps = state => ({
//   state: state.nav
// });

// const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

// export { AppNavigator, middleware };

// //import { navigateBack } from "/actions";
// import { addNavigationHelpers } from 'react-navigation';
// import { BackHandler } from 'react-native';

// const mapStateToProps = state => ({
//   navigation: state.navigationData
// });

// const mapDispatchToProps = dispatch => ({ dispatch });

// class ApplicationNavigatorContainer extends Component {
//   handleBackButton = () => {
//     const { navigation, dispatch } = this.props;
//     //if its at the most backwards state
//     if (navigation.index === 0) return false;
//     //dispatch(navigateBack());
//     return true;
//   };

//   componentWillMount() {
//     BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
//   }
//   componentWillUnmount() {
//     this.removeEventListener('hardwareBackPress', this.handleBackButton);
//   }

//   render() {
//     return (
//       <ApplicationNavigator
//         // navigation={addNavigationHelpers({
//         //   dispatch: this.props.dispatch,
//         //   state: this.props.navigation
//         // })}
//         navigation={{
//           dispatch: this.props.dispatch,
//           state: this.props.navigation
//         }}
//       />
//     );
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ApplicationNavigatorContainer);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';

import RootNavigator from '../navigators';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };
