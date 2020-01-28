import React from 'react';
import {Text,  StyleSheet,View,TouchableOpacity} from 'react-native';

const Right_button = ({color_intered,onClick}) => 
<View>
<TouchableOpacity
  onPress={onClick}
  style={{
    backgroundColor: color_intered,
    paddingTop: 5,
    paddingBottom: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 0,
    margin: 20,
    alignItems: 'center',
    marginBottom: 5,
  }}>
  <Text
    style={{
      textAlign: 'center',
      paddingTop: 5,
      paddingBottom: 5,
      color: 'blue',
      fontSize: 20,
    }}>
    {' '}
    Next
  </Text>
</TouchableOpacity>
</View>;

export default Right_button;