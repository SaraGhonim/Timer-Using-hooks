import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Splash from '_scenes/splash';

import AppNavigator from './app-navigator';

const RootNavigator = createSwitchNavigator(
  {
    Splash: Splash,
    App: AppNavigator,
  },
  {
    initialRouteName: 'Splash',
  },
);

export default createAppContainer(RootNavigator);
