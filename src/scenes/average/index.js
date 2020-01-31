import React from 'react';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';
import {Right_button} from '_atoms';

const AverageScreen = ({navigation}) => (
  <SafeAreaView style={{flex: 1, alignItems: 'center', marginTop: 70,borderRadius:20}}>
    <Text style={{fontSize: 30, marginBottom: 50}}>Screen: average</Text>
    <Right_button 
    height={50}
    width={180}
    borderRadius={20}
      color_intered="black"
      title="Try Again"
      onClick={() => navigation.navigate('SetInterval')}
    />
    <Right_button 
    height={50}
    width={180}
    borderRadius={20}
      color_intered="black"
      title="Get the data"
      onClick={() => navigation.navigate('Results')}
    />
    <Right_button
     height={50}
     width={180}
     borderRadius={20}
      color_intered="black"
      title="Exit"
      onClick={() => navigation.navigate('Welcome')}
    />
  </SafeAreaView>
);

export default AverageScreen;
