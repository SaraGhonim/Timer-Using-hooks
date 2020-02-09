import React, { Component } from 'react';
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  RenderAwards,
} from '_molecules';
import { Card, Text } from "_atoms";
import { theme } from "../../constants";

export default class ReportScreen extends Component {

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={{
            width: wp('100%'),
            height: hp('100%'),
            backgroundColor: '#ffff',
          }}>
          <View style={styles.container}>
            <Image
              source={require('_assets/images/finished2.png')}
              style={styles.LogoStyle}
            />
          </View>
          <View style={{ justifyContent: 'center',alignItems: 'center'}}>
            <Image
              source={require('_assets/images/done.png')}
              style={styles.LogoStyle}
            />
          </View>
          <Card shadow style={{ paddingVertical: theme.sizes.base }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Result")}>
              <RenderAwards />
            </TouchableOpacity>
          </Card>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: hp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },

});