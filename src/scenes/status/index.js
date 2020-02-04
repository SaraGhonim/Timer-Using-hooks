import React from 'react';

import {mapping, light as lightTheme} from '@eva-design/eva';
import {StyleSheet, Text,View,TouchableOpacity} from 'react-native';
// import {CheckboxStatesShowcase} from '_atoms';
import {Right_button} from '_atoms';

const HomeScreen = ({navigation}) => (
  <View>
<Text
      style={{marginBottom: 10, fontSize: 21, marginTop: 30, marginLeft: 18}}>
      Hearing Status
    </Text>

    <Right_button
             height={70}
             width={70}
             borderRadius={35}
              onClick={() => navigation.navigate('Home')}
              color_intered="black"
              title="Result"
            />
          
  </View>
    
);



const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
  },
  container2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 7,
  },
  checkbox: {
    marginLeft: 29,
    marginBottom: 28,
    marginRight: 20,
  },
  checkbox2: {
    marginLeft: 29,
    marginBottom: 28,
    marginRight: 17,
  },
});

export default HomeScreen;
