/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

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
import useFetch from "./effects";

import changeStatements from "./change";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  // this.handleClick = this.handleClick.bind(this);

  const [buttonText, setButtonText] = useState('Clickkkk please');
  const [color1, setColor] = useState('4b0082');
  const [color2, setColor2] = useState('#7a42f4');
  const [index, setIndex] = useState(3);

  const [statment, setStatement] = useState(
    'تسعى مصر للتقدم فى مجال الصناعة والزراعة والسياحة',
  );

  const statments = [
    'ان المحافظة على البيئة نظيفة ضرورة ملحة',
    'لقد رأيت هدهد جميل على الشجرة ليلة أمس',
    'إن فناء المدرسة ملى بالأشجار الرائعةستعجبك كثيرا',
    'أقبل التلميذ من المحاضرة حزينا ولا أعلم السبب ',
    'تسعى مصر للتقدم فى مجال الصناعة والزراعة والسياحة',
    'الصياد فى البحر أولاده يلعبون معه وهو يسعى للرزق',
    'سافر أبي وأمي وأخي  إلى الحج هذا العام',
    'هذا الولد متحمل للمسئولية اشترك الولد مع ابيه فى العمل',
    'يجب ان نحافظ على المياه ،تلوث المياة يؤدى إلى هلاك البشرية',
    'اشترى الأب العجلة ونبيل يلعب مع اخوة مصطفى بها ',
    'ممارسة الرياضة للجسم والقراءة للعقل مفيدة جدا',
    'القارب الجديد يهتز بشدة فى المياةانا خائف',
    'أسرة عمى أسرة متعاونة ومستقرة انا احبهم جدا',
    'تمشى الأم للبيت بسرعة ولهفة لترى أبناءها',
    'التماثيل فى الاقصر تجلب السياح لذا يجب المحافظة عليها',
    ' تقع الازهار فى فصل الخريف و تزدهر فى فصل الربيع',
    'تعتنى الأم بصغارها وتخاف عليهم وتوفر لهم كل ما تقدر عليه',
    'حضر الرئيس راكبا سيارته صباحا ومعه كثير من الحراس',
    'أسرة عمى أسرة متعاونة ومستقرة انا احبهم جدا',
    'يجب ان نحافظ على المياه ،تلوث المياة يؤدى إلى هلاك البشرية',
  ];
  const colors = [
    'brown',
    'black',
    'blue',
    '#6495ed',
    '#ffd420',
    '#7a42f4',
    '#008000',
    'purple',
    '#4b0082',
    'darkorange',

  ];
  const colors1 = [
    'blue',
    '#7a42f4',
    '#008000',
    'black',
    '#00ff7f',
    '#4b0082',
    'darkorange',
    'pink',
    '#6495ed',
    '#ffd420',

  ];

  function handleClick() {
    return setButtonText('Thanks, been clicked!');
  }
  useEffect(() => {
    changeColor();
  }, []);

  function changeColor() {
    setIndex(Math.floor(Math.random() * 10) + 1)
    setColor(colors[index]);
    setColor2(colors1[index]);

    setStatement(statments[index]);
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{marginTop: 130, padding: 20}}>
          <Button onPress={handleClick} title={buttonText}></Button>
          <Text
                style={{
                  color: color1,
                  textAlign: 'center',
                  fontSize: 35,
                  marginTop: 140,
                  marginBottom: 70,
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
             <Button onPress={changeColor} title="Next"></Button>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
