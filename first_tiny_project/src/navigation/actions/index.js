import { NavigationActions } from 'react-navigation';
import * as screenNames from '../screen_names';

export const navigateBack = () => ({ type: 'BACK' });

export const navigateMain = () => ({ type: 'SCREEN_MAIN' });

export const navigateLogin = () => ({ type: 'SCREEN_LOGIN' });

export const navigateRoom = () => ({ type: 'SCREEN_ROOM' });
