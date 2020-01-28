import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import create_random_uniqe from './effects';
import Statment from './src/components/atoms/atom1';
import Timer from './src/components/atoms/atom2';
import Right_button from './src/components/atoms/right_button';

import {colors, colors1, statments} from './change';
const isRed = [
  1,
  1,
  1,
  1,
  1,
  3,
  1,
  1,
  1,
  2,
  3,
  1,
  2,
  1,
  3,
  1,
  1,
  2,
  1,
  1,
  1,
  1,
];
const App: () => React$Node = () => {
  const [minutes_Counter, set_minutes_Counter] = useState(0);
  const [seconds_Counter, set_seconds_Counter] = useState(0);
  const [index, setIndex] = useState(Math.floor(Math.random() * 10) + 1);
  const [statment, setStatement] = useState(statments[index]);
  const [color1, setColor] = useState(colors[index]);
  const [color2, setColor2] = useState(colors1[index]);
  const [red_Or_not, set_red] = useState(1);
   const [counter, set_counter] = useState(0);

  
  
    useEffect(() => {
      var i = 0;
      var num = 0;
      var count = 0;
  
      setInterval(() => {
        num++;
        if (seconds_Counter == 59) {
          set_minutes_Counter(minutes_Counter=>minutes_Counter+1);
          set_seconds_Counter(seconds_Counter=>seconds_Counter*0);
        }
        set_seconds_Counter(seconds_Counter=>seconds_Counter+1);
        console.log(num,count,seconds_Counter,minutes_Counter)
        console.log(num,count,seconds_Counter,minutes_Counter)

       }, 1000);
    }, [seconds_Counter,minutes_Counter]);

    // return [seconds_Counter.toString(), minutes_Counter.toString()];
  
  

  // const z= useFetch();

  function change_statement_onPress() {
    setTimeout(() => {
      setIndex(Math.floor(Math.random() * 15) + 1);
      setColor(colors[index]);
      setColor2(colors1[index]);
      set_red(isRed[index]);
      setStatement(statments[index]);
      set_minutes_Counter(0);
      set_seconds_Counter(0)
      var x = counter
      set_counter(x+1)
      if(x === 3){
        setStatement('')
      }
    }, 1000);
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{marginTop: 50, padding: 20}}>
          <Timer seconds={seconds_Counter} minutes={minutes_Counter} />
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

           {(counter===4)?( <Right_button
            onClick={change_statement_onPress}
            color_intered="red"
            title="Next"
          />):(
            <Right_button
            onClick={change_statement_onPress}
            color_intered="red"
            title="Show Results"
          />
          )


          } 
         
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
