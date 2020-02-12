import {Timer, Card, Block} from '_atoms';
import {Statment} from '_atoms';
import {useStopwatch} from 'react-timer-hook';
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  statments,
  backgroundColors,
  colors1,
  interedColorProbability,
} from '../../constants/mocks';
import {useInterval} from '../../utils/hooks';
import {theme} from '../../constants';
import {Right_button} from '_atoms';
export default function TestScreen({navigation}) {
  const {seconds, minutes, pause, reset} = useStopwatch({
    autoStart: true,
  });

  function useAsyncState(initialValue) {
    const [value, setValue] = useState(initialValue);
    const setter = x =>
      new Promise(resolve => {
        setValue(x);
        resolve(x);
      });
    return [value, setter];
  }

  const [counter, setCounter] = useAsyncState(0);
  const [wrongAnswer, setWrongAnswer] = useAsyncState(0);
  // const [statment, setStatement] = useAsyncState(statments[index]);
  // const [color1, setColor] = useAsyncState(backgroundColors[index]);
  // const [color2, setColor2] = useAsyncState(colors1[index]);
  const [interedColor_Or_not, set_Color] = useAsyncState(
    interedColorProbability[Math.floor(Math.random() * 24)],
  );
  const [] = useState(0);
  const [report_response_time, set_report] = useState(0);
  const [response_time_array, set_array] = useAsyncState([]);
  const [disabledd, set_disable] = useAsyncState(false);
  const [index, setIndex] = useAsyncState(0);
  const [wordColorIndex, setWordColorIndex] = useAsyncState(
    Math.floor(Math.random() * 5),
  );
  const[statementIndex,setStatementIndex]=useAsyncState(0)
const[colorIndex,setColorIndex]=useAsyncState(0)
const [statementArray, setStatementArray] = useAsyncState(
  statments[statementIndex].split(' '),
);

  function change_statement_onPress() {
    console.log('looog')
    // setTimeout(() => {
    //   reset();
    //   setIndex(index + 1)
    //     .then(index => {
    //       setStatementArray(statments[index].split(' '));
    //       console.log('index', index);
    //     })
    //     .then(statementArray => {

    //       setWordColorIndex(Math.floor(Math.random() * statementArray.length))
    //       console.log('length', statementArray)
          
    //     })
    //     .then(wordColorIndex => console.log('wordColorIndex', wordColorIndex))

    //     .then(set_Color(interedColorProbability[index]))
    //     .then(set_disable(false));
    // }, 1000 * parseInt(navigation.state.params.Post_Click_Interval));
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
    if (statementIndex === 0) {
      shuffle(backgroundColors);
      shuffle(statments);
      shuffle(interedColorProbability);
      shuffle(colors1);
    }
    setStatementIndex(statementIndex + 1)
      .then(statementIndex =>
        {setStatementArray(statments[statementIndex].split(' '))
               console.log('index', statementIndex);

}
      )
      .then(statementArray =>
        {setWordColorIndex(Math.floor(Math.random() * statementArray.length))
          console.log('length', statementArray.length)

        }
      )
      .then(setColorIndex(colorIndex => colorIndex + 1))
      .then(set_Color(interedColorProbability[colorIndex]));
    reset();
  }, 1000 * parseInt(navigation.state.params.interval));
  function isPressed() {
    pause();
    setCounter(counter + 1)
      .then(counter => {
        console.log('counter is', counter);
        if (counter === parseInt(navigation.state.params.statementsNumber)) {
          setTimeout(() => {
            setStatementArray([' ']);

            navigation.navigate('Report');
          }, 3000);
        } else {
          change_statement_onPress();
        }
      })
      .then(set_disable(true));
  }
  const renderStatement = () => {
    console.log();
  };
  function check_Was_Clicked() {
    isPressed();
    if (interedColor_Or_not === 1) {
      set_array([
        ...response_time_array,
        seconds * 1000 + minutes * 60 * 1000,
      ]).then(response_time_array =>
        console.log(
          'cross_Was_Clicked and it is right answer',
          response_time_array,
        ),
      );
    } else {
      setWrongAnswer(wrongAnswer + 1).then(wrongAnswer =>
        console.log('check_Was_Clicked and it is wrong answer', wrongAnswer),
      );
    }
  }
  function cross_Was_Clicked() {
    isPressed();

    if (interedColor_Or_not === 1) {
      setWrongAnswer(wrongAnswer + 1).then(wrongAnswer =>
        console.log('cross_Was_Clicked and it is wrong answer', wrongAnswer),
      );
    } else {
      set_array([
        ...response_time_array,
        seconds * 1000 + minutes * 60 * 1000,
      ]).then(response_time_array =>
        console.log(
          'cross_Was_Clicked and it is right answer',
          response_time_array,
        ),
      );
    }
  }
  renderStatement();

  return (
    <>
      <SafeAreaView>
        <ScrollView style={styles.welcome} showsVerticalScrollIndicator={false}>
          <Timer seconds={seconds} minutes={minutes} />

          {
            (console.log(interedColor_Or_not),
            console.log('WordColorIndex', wordColorIndex))
          }

          {interedColor_Or_not === 1 ? (
            <Statment
              color1={backgroundColors[statementIndex]}
              color2={navigation.state.params.color}
              statment={statementArray}
              index={wordColorIndex}
            />
          ) : interedColor_Or_not === 2 ? (
            <Statment
              color1={backgroundColors[statementIndex]}
              color2={colors1[statementIndex]}
              statment={statementArray}
              index={wordColorIndex}
            />
          ) : (
            <Statment
              color1={backgroundColors[statementIndex]}
              color2={backgroundColors[statementIndex]}
              statment={statementArray}
              index={wordColorIndex}
            />
          )}

          <Right_button
            onClickCheck={check_Was_Clicked}
            onClickCross={cross_Was_Clicked}
            color_intered={navigation.state.params.color}
            disable={disabledd}
            other_color={backgroundColors[index]}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  welcome: {
    paddingVertical: theme.sizes.padding,
    paddingHorizontal: theme.sizes.padding,
    backgroundColor: theme.colors.gray4,
  },
});
