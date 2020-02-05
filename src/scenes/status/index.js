import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// import {CheckboxStatesShowcase} from '_atoms';
import {Right_button} from '_atoms';
import {RenderAwards, RenderMonthly, RenderHomeButton} from '_molecules';
import {theme, mocks} from '../../constants';

const HomeScreen = ({navigation}) => (
  <>
    <View>
      <ScrollView style={styles.welcome} showsVerticalScrollIndicator={false}>
        <Text
          style={{
            marginBottom: 10,
            fontSize: 21,
            marginTop: 20,
            marginLeft: 18,
          }}>
          Hearing Status
        </Text>

        <RenderMonthly />
        <RenderAwards />
        </ScrollView>


        <RenderHomeButton navigation={navigation} />
    </View>
  </>
);

const styles = StyleSheet.create({
  welcome: {
    paddingVertical: theme.sizes.padding,
    paddingHorizontal: theme.sizes.padding,
    backgroundColor: theme.colors.gray4,
  },
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
