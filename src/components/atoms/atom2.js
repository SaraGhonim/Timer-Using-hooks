import React from 'react';
// import {Text} from 'react-native';
import {theme} from '../../constants'

import {Card,Text,Block} from '_atoms'


const Timer = ({seconds,minutes}) => 
<Block style={{ marginBottom: 0 }}>

<Text spacing={0.4} transform="uppercase">
Timer
</Text>

<Card shadow style={{paddingVertical: theme.sizes.base * 2}}>
<Text h1 center 
// style={{
//   textAlign: 'center',
//   fontSize: 40,
//   margin: 0,
//   color: '#000',
>
  
{minutes} : {seconds}
</Text>
</Card>
</Block>

;

export default Timer;