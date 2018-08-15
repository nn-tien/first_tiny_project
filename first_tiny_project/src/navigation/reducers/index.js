import { NavigationActions } from 'react-navigation';
import { RootNavigator } from '../containers';
import * as screenNames from '../screen_names';

const mainAction = RootNavigator.router.getActionForPathAndParams(
  screenNames.MAIN
);

const roomAction = RootNavigator.router.getActionForPathAndParams(
  screenNames.MAIN
);

const mainNavState = RootNavigator.router.getStateForAction(mainAction);
const roomNavState = RootNavigator.router.getStateForAction(roomAction);

const loginAction = RootNavigator.router.getActionForPathAndParams(
  screenNames.LOGIN
);

const initialNavState = RootNavigator.router.getStateForAction(
  loginAction,
  mainNavState,
  roomNavState
);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'BACK':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'SCREEN_LOGIN':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: screenNames.LOGIN }),
        state
      );
      break;
    case 'SCREEN_MAIN':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: screenNames.MAIN }),
        state
      );
      break;
    case 'SCREEN_ROOM':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: screenNames.ROOM }),
        state
      );
      break;
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
}

export default nav;
