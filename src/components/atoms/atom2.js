import React from 'react';
import {Text} from 'react-native';

const Timer = ({seconds,minutes}) =>  <Text
style={{
  textAlign: 'center',
  fontSize: 40,
  margin: 0,
  color: '#000',
}}>
{minutes} : {seconds}
</Text>

;

export default Timer;