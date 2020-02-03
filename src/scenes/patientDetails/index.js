import React from 'react';
import {View, Text} from 'react-native';
import {Register} from '_molecules';

const PatientDetails = ({navigation}) => {
  return (
    <View>
      <Register navigation={navigation} />
    </View>
  );
};

export default PatientDetails;
