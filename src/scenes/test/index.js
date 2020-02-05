import {Timer,Card,Block, Badge, Text} from '_atoms';
import {Statment} from '_atoms';
import {useStopwatch} from 'react-timer-hook';
import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, StatusBar,StyleSheet,TouchableOpacity} from 'react-native';
import {statments, backgroundColors, colors1} from '../../constants/mocks';
import {isRed} from '../../../change';
import {useInterval} from '../../utils/hooks';
import rgba from "hex-to-rgba";
import { styles as blockStyles } from "../../components/atoms/Block";
import { styles as cardStyles } from "../../components/atoms/Card";
import { theme, mocks } from "../../constants";
import Icon from 'react-native-vector-icons/FontAwesome';

// const { width } = Dimensions.get("window");
import useStateWithCallback from 'use-state-with-callback';
import { set } from 'react-native-reanimated';

export default function TestScreen({navigation}) {
  const {seconds, minutes, hours, days, start, pause, reset} = useStopwatch({
    autoStart: true,
  });
  const [index, setIndex] = useState(Math.floor(Math.random() * 10) + 1);
  const [statment, setStatement] = useState(statments[index]);
  const [color1, setColor] = useState(backgroundColors[index]);
  const [color2, setColor2] = useState(colors1[index]);
  const [red_Or_not, set_red] = useState(1);
  const [counter, set_counter] = useState(0);
  const [report_response_time, set_report] = useState(0);
  const [response_time_array, set_array] = useState([]);
  const [disabledd, set_disable] = useState(false);
  const [statementIndex, setStatementIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(3);
  const [wordColorIndex, setWordColorIndex] = useState(3)
  const [statementArray, setStatementArray] = useState(statments[0].split(' '))
  // const [count, setCount] = useStateWithCallback(0, count => {
  //   if (count > 1) {
  //     setStatementArray(statments[count].split(' '))
  //     console.log('Threshold of over 1 reached.');
  //   } else {
  //     console.log('No threshold reached.');
  //   }
  // });
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
      return;
    }

    setTimeout(() => {
      reset();

      set_disable(false);
      setIndex(Math.floor(Math.random() * 15) + 1);
      setColor(backgroundColors[index]);
      setColor2(colors1[index]);
      set_red(isRed[index]);
      setStatement(statments[index]);
    }, 3000);

    //{autoStart: false,}
  }

  function results() {
    var report = 0;
    response_time_array.forEach(elem => (report += elem));
    report = report / response_time_array.length;
    set_report(report);
    console.log(report_response_time, response_time_array);
  }
  const shuffle = array => {
    array.sort(() => Math.random() - 0.5);
  };

  // useEffect(() => {
  //   shuffle(backgroundColors);
  //   shuffle(statments);

  //   return () => {};
  // }, []);
  useInterval(() => {
    // Your custom logic here
    // shuffle(backgroundColors);
    // shuffle(statments);
  setStatementArray(statments[statementIndex].split(' '))

    let x=Math.floor(Math.random() * (statementArray.length))
    setStatementIndex(statementIndex => statementIndex + 1);
    setColorIndex(colorIndex => colorIndex + 1);
    setWordColorIndex(x)

  }, 6000,backgroundColors,statment);
  // let statementArray = statments[statementIndex].split(' ')
  const renderStatement = () => {
    console.log();
  };
  renderStatement()

  return (
    <>
      <SafeAreaView>
      
        <Timer seconds={seconds} minutes={minutes} />

        <Text center>
          {statementArray.map((word, index) => {
            console.log(index, wordColorIndex, statementArray.length)
            return (
              <Text
                h1
                color={
                  index === wordColorIndex
                    ? 'red'
                    : backgroundColors[colorIndex]
                }>{` ${word}`}</Text>
            );
          })}
        </Text>
        <Card shadow style={{ paddingVertical: theme.sizes.base * 5 }}>

        <Block center middle style={styles.endTrip} >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setColorIndex( 1)}
          >
            <Badge color={theme.colors.accent} size={62}>
              <Icon name="square" size={62 / 2.5} color="white" /> 
            </Badge>
          </TouchableOpacity>
      </Block>
         </Card> 

        {/* <View style={{marginBottom: 20, height: 300}}>
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
        </View> */}
        {/* {counter === 2 ? (
          <View style={{marginLeft: 80}}>
            <Right_button
             height={50}
             width={180}
             borderRadius={20}
              onClick={() => navigation.navigate('Report')}
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
        )} */}
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  trip: {
    paddingVertical: theme.sizes.padding / 2,
    padding: theme.sizes.padding,
    backgroundColor: theme.colors.gray4
  },
  drivingStatus: {
    marginRight: theme.sizes.base,
    // width: width / 2.568
  },
  drivingIcon: {
    height: 56,
    marginBottom: theme.sizes.base * 2
  },
  map: {
    height: 352
  },
  mapMyLocation: {
    position: "absolute",
    borderRadius: 4,
    bottom: theme.sizes.base,
    left: theme.sizes.base,
    width: theme.sizes.base * 3,
    height: theme.sizes.base * 3,
    backgroundColor: theme.colors.white
  },
  endTrip: {
    position: "absolute",
     left: (420 - 144) / 2,
    bottom: 50
  }
});