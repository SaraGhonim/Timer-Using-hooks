import React from 'react';
import {Text,View} from 'react-native';
import {theme} from '../../constants'

import {Card,Block} from '_atoms'


const Statment = ({color2,color1,statment,index}) =>
<Block style={{ marginBottom: 0 }}>

<Text style={{textTransform:"uppercase",letterSpacing:.4,fontSize:14}}>
Statment</Text>

<Card shadow style={{paddingVertical: theme.sizes.base * 0}}>
<View style={{marginBottom: 5, height: 250}}>
<Text
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
</View>
</Card>
</Block>
;

export default Statment;