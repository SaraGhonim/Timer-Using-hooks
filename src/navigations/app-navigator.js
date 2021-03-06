import HomeScreen from '_scenes/home';
import ReportScreen from '_scenes/report';
import WelcomeScreen from '_scenes/welcome';
import StatusScreen from '_scenes/status';
import TestOptionsScreen from '_scenes/testOptions';
import PatientDetails from '_scenes/patientDetails';
import Test from '_scenes/test';
import ResultsScreen from '_scenes/results';


import {createStackNavigator} from 'react-navigation-stack';

const TabNavigatorConfig = {
  initialRouteName: 'Welcome',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {

  Welcome: WelcomeScreen,
  Home: HomeScreen,
  PatientDetails,
  Status: StatusScreen,
  TestOptions: TestOptionsScreen,
  Test,
  Report: ReportScreen,
  Result: ResultsScreen,
};

const AppNavigator = createStackNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;
