import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  RenderAwards,
} from '_molecules';


export default class Welcome extends Component {

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
          <View style={{ justifyContent: "space-between", flexDirection: 'row' }}>
            <Image
              source={require('_assets/images/i3.png')}
              style={styles.UnivesityStyle}
            />
            <Image
              source={require('_assets/images/i4.jpeg')}
              style={styles.FacultyStyle}
            />
          </View>
          <View style={styles.container}>
            <Image
              source={require('_assets/images/logo.png')}
              style={styles.LogoStyle}
            />
          </View>
          <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Home")}>
          <RenderAwards /> 
          </TouchableOpacity>
          
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginText: {
    color: '#006b8b',
    textAlign: 'center',
    paddingLeft: wp('5%'),
    paddingRight: wp('5%'),
    fontSize: 25,
  },
  loginScreenButton: {
    marginRight: wp('5%'),
    marginLeft: wp('5%'),
    marginTop: wp('30%'),
    paddingTop: wp('3%'),
    paddingBottom: wp('3%'),
    borderRadius: 10,
    backgroundColor: '#27A9FF',
  },
  FacultyStyle: {
    height: hp('14%'),
    width: wp('25%'),
    marginTop: 0,
    marginRight: wp('5%'),

  },
  UnivesityStyle: {
    height: hp('15%'),
    width: wp('33%'),
    // marginTop: 110,
  },
  LogoStyle: {
    height: hp('25%'),
    width: wp('60%'),
    marginBottom: 110,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: wp('5%'),
    paddingRight: wp('5%'),
    fontSize: 25,
  },
});
