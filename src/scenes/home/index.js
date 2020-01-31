// import React from 'react';
// import {SafeAreaView, Text, TouchableHighlight} from 'react-native';

// const Home = ({navigation}) => (
//   <SafeAreaView>
//     <Text>Screen: Login</Text>

//     <TouchableHighlight onPress={() => navigation.navigate('Home')}>
//       <Text>Go to home</Text>
//     </TouchableHighlight>
//   </SafeAreaView>
// );

// export default Home;


///////////////////////////////

import {Timer} from '_atoms';
import {Statment} from '_atoms';
import {Right_button} from '_atoms';
import {useStopwatch} from 'react-timer-hook';
import ResultsScreen from '_scenes/results';
import { useNavigation } from '@react-navigation/native';

import React, {useState} from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';
// import create_random_uniqe from './effects';

import {colors, colors1, statments, isRed} from '../../../change';
export default function HomeScreen({navigation}) {
  const {seconds, minutes, hours, days, start, pause, reset} = useStopwatch({
    autoStart: true,
  });
  const [index, setIndex] = useState(Math.floor(Math.random() * 10) + 1);
  const [statment, setStatement] = useState(statments[index]);
  const [color1, setColor] = useState(colors[index]);
  const [color2, setColor2] = useState(colors1[index]);
  const [red_Or_not, set_red] = useState(1);
  const [counter, set_counter] = useState(0);
  const [average_response_time, set_average] = useState(0);
  const [response_time_array, set_array] = useState([]);
  const [disabledd, set_disable] = useState(false);
  // const navigation = useNavigation();

  function change_statement_onPress() {
    pause();
    set_disable(true);
    var millisecodn = seconds * 1000 + minutes * 60 * 1000;
    set_array([...response_time_array, millisecodn]);
    set_counter(counter => counter + 1);
    if (counter === 2) {
      setStatement(' ');
      reset();
      pause();
       return;}

    setTimeout(() => {
      reset();
     
      set_disable(false);
      setIndex(Math.floor(Math.random() * 15) + 1);
      setColor(colors[index]);
      setColor2(colors1[index]);
      set_red(isRed[index]);
      setStatement(statments[index]);

    }, 3000);
  
    
//{autoStart: false,}

    
    
  }

  function results() {
    var average = 0;
    response_time_array.forEach(elem => (average += elem));
    average = average / response_time_array.length;
    set_average(average);
    console.log(average_response_time, response_time_array);
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Timer seconds={seconds} minutes={minutes} />
        <View style={{marginBottom: 20, height: 300}}>
          {red_Or_not === 1 ? (
            <Statment
              color1={color1}
              color2="red"
              statment={statment}
              index={index}
            />
          ) : red_Or_not === 2 ? (
            <Statment
              color1={color1}
              color2={color2}
              statment={statment}
              index={index}
            />
          ) : (
            <Statment
              color1={color1}
              color2={color1}
              statment={statment}
              index={index}
            />
          )}
        </View>
        {counter === 2 ? (
          <View style={{marginLeft: 80}}>
            <Right_button
             height={50}
             width={180}
             borderRadius={20}
              onClick={() => navigation.navigate('Average')}
              color_intered="black"
              title="Show Results"
            />
          </View>
        ) : (
          <View style={{flex: 1, flexDirection: 'row', marginLeft: 80}}>
            <Right_button
             height={70}
             width={70}
             borderRadius={35}
              onClick={change_statement_onPress}
              color_intered="#ff9800"
              title="press"
              disable={disabledd}
            />
            <Right_button
             height={70}
             width={70}
             borderRadius={35}
              onClick={results}
              color_intered="black"
              title="Result"
              disable={disabledd}
            />
          </View>
        )}
      </SafeAreaView>
    </>
  );
}
