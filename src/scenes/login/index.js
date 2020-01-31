import React from 'react';
import {SafeAreaView, Text, TouchableHighlight,View} from 'react-native';

const LoginScreen = ({navigation}) => (
  
  <View style={{flex:1}}>
    <Text>Screen: Logiiiiiiiiiin</Text>

    <TouchableHighlight onPress={() => navigation.navigate('Home')}>
      <Text>Go to home</Text>
    </TouchableHighlight>
  </View>
);

export default LoginScreen;