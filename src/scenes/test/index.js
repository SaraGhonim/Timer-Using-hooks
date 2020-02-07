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

  // const [index, setIndex] = useAsyncState(Math.floor(Math.random() * 10) + 1);
  // const [statment, setStatement] = useAsyncState(statments[index]);
  // const [color1, setColor] = useAsyncState(backgroundColors[index]);
  // const [color2, setColor2] = useAsyncState(colors1[index]);
  const [interedColor_Or_not, set_Color] = useAsyncState(
    interedColorProbability[Math.floor(Math.random() * 24)],
  );
  const [] = useState(0);
  const [report_response_time, set_report] = useState(0);
  const [response_time_array, set_array] = useState([]);
  const [disabledd, set_disable] = useAsyncState(false);
  const [statementIndex, setStatementIndex] = useAsyncState(
    Math.floor(Math.random() * 10),
  );
  const [colorIndex, setColorIndex] = useAsyncState(
    Math.floor(Math.random() * 10),
  );
  const [wordColorIndex, setWordColorIndex] = useAsyncState(
    Math.floor(Math.random() * 10),
  );
  const [, setStatementArray] = useAsyncState(
    statments[statementIndex].split(' '),
  );

  function change_statement_onPress() {
    pause();
    set_disable(true).then(
      set_array([...response_time_array, seconds * 1000 + minutes * 60 * 1000]),
    );
    if (colorIndex === 3) {
      setStatement(' ');
      reset();
      pause();
      // break;
    }

    setTimeout(() => {
      reset();
      setStatementIndex(statementIndex + 1)
        .then(statementIndex =>
          setStatementArray(statments[statementIndex].split(' ')),
        )
        .then(statementArray =>
          setWordColorIndex(Math.floor(Math.random() * statementArray.length)),
        )
        .then(setColorIndex(colorIndex => colorIndex + 1))
        .then(set_Color(interedColorProbability[colorIndex]))
        .then(set_disable(false));
      // setIndex(Math.floor(Math.random() * 15) + 1);
      // setColor(backgroundColors[index]);
      // setColor2(colors1[index]);
      // set_red(isRed[index]);
      // setStatement(statments[index]);
    }, 1000 * parseInt(navigation.state.params.interval));

    //{autoStart: false,}
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
        setStatementArray(statments[statementIndex].split(' ')),
      )
      .then(statementArray =>
        setWordColorIndex(Math.floor(Math.random() * statementArray.length)),
      )
      .then(setColorIndex(colorIndex => colorIndex + 1))
      .then(set_Color(interedColorProbability[colorIndex]));
    reset();
  }, 1000 * parseInt(navigation.state.params.interval));
  const renderStatement = () => {
    console.log();
  };
  renderStatement();

  return (
    <>
      <SafeAreaView>
        <ScrollView style={styles.welcome} showsVerticalScrollIndicator={false}>
          <Card shadow style={{paddingVertical: theme.sizes.base * 2}}>
            <Timer seconds={seconds} minutes={minutes} />

            {console.log(interedColor_Or_not)}

            {/* <Text center>
          {statementArray.map((word, index) => {
            console.log(index, wordColorIndex, statementArray.length);
            return (
              <Text
                h1
                color={
                  index === wordColorIndex
                    ? navigation.state.params.color
                    : backgroundColors[colorIndex]
                }>{` ${word}`}</Text>
            );
          })}
        </Text> */}
          </Card>
          <Card shadow style={{paddingVertical: theme.sizes.base * 0}}>
            <View style={{marginBottom: 5, height: 250}}>
              {interedColor_Or_not === 1 ? (
                <Statment
                  color1={backgroundColors[colorIndex]}
                  color2={navigation.state.params.color}
                  statment={statments[statementIndex]}
                  index={wordColorIndex}
                />
              ) : interedColor_Or_not === 2 ? (
                <Statment
                  color1={backgroundColors[colorIndex]}
                  color2={colors1[colorIndex]}
                  statment={statments[statementIndex]}
                  index={wordColorIndex}
                />
              ) : (
                <Statment
                  color1={backgroundColors[colorIndex]}
                  color2={backgroundColors[colorIndex]}
                  statment={statments[statementIndex]}
                  index={wordColorIndex}
                />
              )}
            </View>
          </Card>
          <Card shadow style={{paddingVertical: theme.sizes.base * 3.5}}>
            <Block row>
              <Block center>
                <TouchableOpacity
                  disabled={disabledd}
                  style={{
                    backgroundColor: navigation.state.params.color,
                    height: 60,
                    width: 60,
                    borderRadius: 30,
                  }}></TouchableOpacity>
              </Block>
              <Block center>
                <TouchableOpacity
                  disabled={disabledd}
                  onPress={change_statement_onPress}
                  style={{
                    backgroundColor: backgroundColors[colorIndex],
                    height: 60,
                    width: 60,
                    borderRadius: 30,
                  }}></TouchableOpacity>
              </Block>
            </Block>
          </Card>
        </ScrollView>

    {/*<View style={{flex: 1, flexDirection: 'row', marginLeft: 80}}>
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
  welcome: {
    paddingVertical: theme.sizes.padding,
    paddingHorizontal: theme.sizes.padding,
    backgroundColor: theme.colors.gray3,
  },
});
