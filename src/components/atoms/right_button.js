import React from 'react';
import {Text,  StyleSheet,View,TouchableOpacity} from 'react-native';

const Right_button = ({color_intered,onClick,title,disable,height,width,borderRadius}) => 
<View>
<TouchableOpacity
  onPress={onClick}
  disabled={disable}
  style={{
    backgroundColor: color_intered,
    paddingTop: 5,
    paddingBottom: 10,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    marginTop: 0,
    margin: 20,
    alignItems: 'center',
    marginBottom: 50,
    height:height,
    width: width,
    borderRadius: borderRadius
  }}>
  <Text
    style={{
      textAlign: 'center',justifycontent:'flex-end',
      paddingTop: 5,
      paddingBottom: 5,
      color: 'blue',
      fontSize: 20,
    }}>
    {' '}
    {title}
  </Text>
</TouchableOpacity>
</View>;

export default Right_button;