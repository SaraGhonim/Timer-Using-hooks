
import HomeScreen from '_scenes/home';
import AverageScreen from '_scenes/average';
import ResultsScreen from '_scenes/results';

import {createStackNavigator} from 'react-navigation-stack';

const TabNavigatorConfig = {
  initialRouteName: 'Home',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Home:{
    screen:HomeScreen,
  },
  Average:{
    screen:AverageScreen,
  },
  Results:{
    screen:ResultsScreen,
  },
};

const AppNavigator = createStackNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;
 