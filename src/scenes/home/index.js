import React from 'react';
import {View, Text, Button} from 'react-native';
import navigations from '_navigations';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>HomeScreen screen</Text>
      <Button
        title="press"
        onPress={() => {
          navigation.navigate('PatientDetails');
        }}>
        {' '}
      </Button>
    </View>
  );
};

export default HomeScreen;
