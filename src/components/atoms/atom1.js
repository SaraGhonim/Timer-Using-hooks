import React from 'react';
import {Text} from 'react-native';

const Statment = ({color2,color1,statment,index}) =>  <Text
style={{
  color: color1,
  textAlign: 'center',
  fontSize: 35,
  marginTop: 30,
  marginBottom: 20,
}}>
{statment.split(' ').map((x, ind) => (
  <Text
    style={{
      color:
         index==ind
          ? color2
          : color1,
    }}>
    {x + ' '}
  </Text>
))}
</Text>
;

export default Statment;