import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '_scenes/login';
import WelcomeScreen from '_scenes/welcome';
import StatusScreen from '_scenes/status';

import SetIntervalScreen from '_scenes/setIntervalss';

const AuthNavigatorConfig = {
  initialRouteName: 'Welcome',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Welcome:WelcomeScreen,
  Status:StatusScreen,
  SetInterval:SetIntervalScreen,
  
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;
 