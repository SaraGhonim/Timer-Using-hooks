import React, {Component} from 'react';
import {
  SafeAreaView,
  TouchableHighlight,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import {Right_button} from '_atoms';
import DatePicker from 'react-native-datepicker';

// ssimport DataTable from 'react-native-data-table';
import {
  ApplicationProvider,
  Layout,
  Datepicker,
  CheckBox,
  Button,
} from '@ui-kitten/components';
import {mapping, light as lightTheme} from '@eva-design/eva';
import {MyDatePicker} from '_atoms';

export default class ResultsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {date: '2020-01-01'};
  }

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          marginTop: 70,
          borderRadius: 20,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text>From</Text>
          <View style={{marginLeft: 30}}>
            <MyDatePicker />
          </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 50}}>
          <Text>To</Text>
          <View style={{marginLeft: 39}}>
            <MyDatePicker />
          </View>
        </View>

        <Right_button
          height={50}
          width={180}
          borderRadius={20}
          color_intered="black"
          title="Try Again"
          onClick={() => this.props.navigation.navigate('SetInterval')}
        />

        <Right_button
          height={50}
          width={180}
          borderRadius={20}
          color_intered="black"
          title="Exit"
          onClick={() => this.props.navigation.navigate('Welcome')}
        />
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate('Average')}>
          <Text>Back</Text>
        </TouchableHighlight>
      </SafeAreaView>
    );
  }
}
// const DatepickerSimpleUsageShowcase = () => {

//   const [date, setDate] = React.useState(new Date());

//   return (
//     <Layout style={styles.container}>

//       <Text
//         style={styles.text}
//         category='h6'>
//         {`Selected date: ${date.toLocaleDateString()}`}
//       </Text>

//       <Datepicker
//         date={date}
//         onSelect={setDate}
//       />

//     </Layout>
//   );
// };

const styles = StyleSheet.create({
  container: {
    minHeight: 376,
  },
  text: {
    marginVertical: 8,
  },
});
