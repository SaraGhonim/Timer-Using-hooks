import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,ScrollView,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ColorPalette from 'react-native-color-palette';
import Icon from 'react-native-vector-icons/FontAwesome';
import rgba from "hex-to-rgba";

import {ColorPal} from '_molecules';
import {selectColors} from '../../constants/mocks';

import { Block, Badge, Card, Text } from "_atoms";
import { styles as blockStyles } from "../../components/atoms/Block";
import { styles as cardStyles } from "../../components/atoms/Card";
import { theme, mocks } from "../../constants";



export default class TestOptions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      IntervalValue: 0,
      selected: 0,
    };
  }

  renderColorButtons = () => {
    return (

      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        {selectColors.map((color, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  selected: index,
                });
              }}
              style={{
                marginRight: 15,
                backgroundColor: color,
                width: 50,
                height: 50,
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {index === this.state.selected ? (
                <Icon name="check" size={15} color="white" />
              ) : null}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  render() {
    return (
      <View>
               <ScrollView style={styles.welcome} showsVerticalScrollIndicator={false}>

        <Card shadow style={{ paddingVertical: theme.sizes.base * 4 }}>
        <Text h2 center  spacing={2} bold style={{marginVertical: 1}}>Test Options</Text>

          <View style={{marginTop: 70, margin: 20}}>
            <TextInput
              style={{marginBottom: 20}}
              onChangeText={IntervalValue => this.setState({IntervalValue})}
              value={this.state.IntervalValue}
              keyboardType="email-address"
              autoCorrect={false}
              maxLength={30}
              multiline={false}
              placeholder="Set The Interval"
              underlineColorAndroid="#a9a9a9"></TextInput>
            <Text h3 center  spacing={2} bold style={{marginVertical: theme.sizes.padding}}>Select Color</Text>
            {this.renderColorButtons()}
          </View>

          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('Test', {
                interval: this.state.IntervalValue,
                color: selectColors[this.state.selected]
              })
            }
            style={styles.loginScreenButton}
            underlayColor="#fff">
            <Text style={styles.loginText}>Next</Text>
          </TouchableOpacity>
          </Card>
          </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    paddingVertical: theme.sizes.padding,
    paddingHorizontal: theme.sizes.padding,
    backgroundColor: theme.colors.gray4,
  },
  loginText: {
    color: 'white',
    textAlign: 'center',
    paddingLeft: wp('5%'),
    paddingRight: wp('5%'),
    fontSize: 25,
  },
  loginScreenButton: {
    marginRight: wp('13%'),
    marginLeft: wp('13%'),
    marginTop: wp('10%'),
    paddingTop: wp('2%'),
    paddingBottom: wp('2%'),
    backgroundColor:  "#27A9FF"    ,
    borderRadius: 10,
  },
});
