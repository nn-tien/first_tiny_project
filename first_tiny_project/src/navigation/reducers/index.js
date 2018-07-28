import { NavigationActions } from 'react-navigation';
import { RootNavigator } from '../containers';
import * as screenNames from '../screen_names';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = RootNavigator.router.getActionForPathAndParams(
  screenNames.MAIN
);
const tempNavState = RootNavigator.router.getStateForAction(firstAction);
const secondAction = RootNavigator.router.getActionForPathAndParams(
  screenNames.LOGIN
);

const initialNavState = RootNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'LOGIN1':
      // nextState = RootNavigator.router.getStateForAction(
      //   NavigationActions.back(),
      //   state
      // );
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: screenNames.LOGIN }),
        state
      );
      break;
    case screenNames.MAIN:
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: screenNames.MAIN }),
        state
      );
      break;
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

export default nav;
