import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Card, Block,Icon,CrossIcon} from '_atoms';
import {theme} from '../../constants';

const Right_button = ({color_intered, onClick, disable, other_color}) => (
  <Block style={{marginBottom: 0}}>
    <Text
      style={{textTransform: 'uppercase', letterSpacing: 0.4, fontSize: 14}}>
      Check
    </Text>

    <Card shadow style={{paddingVertical: theme.sizes.base * 2}}>
      <Block row>
        <Block center>
          <TouchableOpacity
            onPress={onClick}
            disabled={disable}
            style={{
              backgroundColor: color_intered,
              height: 60,
              width: 60,
              borderRadius: 30,
            }}><Icon/></TouchableOpacity>
        </Block>

        <Block
          flex={false}
          color="gray"
          style={{marginVertical: theme.sizes.base / 2, width: 2}}
        />

        <Block center>
          <TouchableOpacity
            onPress={onClick}
            disabled={disable}
            style={{
              backgroundColor: other_color,
              height: 60,
              width: 60,
              borderRadius: 30,
            }}><CrossIcon/></TouchableOpacity>
        </Block>
      </Block>
    </Card>
  </Block>
);

export default Right_button;
