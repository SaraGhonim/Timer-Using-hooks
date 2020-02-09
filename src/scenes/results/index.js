import React, { Component } from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { Card } from '_atoms';
import { theme } from "../../constants";

import {
  RenderAwards,
  RenderTrips,
  RenderMonthly,
  RenderTripButton,
  TestResults
} from '_molecules';

export default class ResultsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { date: '2020-01-01' };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.welcome} showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Image
              source={require('_assets/images/result.png')}
              style={styles.LogoStyle}
            />
          </View>
          <Card shadow style={{ paddingVertical: theme.sizes.base }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Result")}>
              <TestResults />
              <RenderAwards />
            </TouchableOpacity>
          </Card>
        </ScrollView>
      </View>

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
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginVertical: 8,
  },
});
