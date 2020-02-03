import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
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

import {ColorPal} from '_molecules';
import {Text} from '_atoms';
import {selectColors} from '../../constants/mocks';
import { theme } from '../../constants';

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
        <ImageBackground
          source={require('_assets/images/i6.jpg')}
          style={{
            width: wp('100%'),
            height: hp('100%'),
          }}>
          <View style={{marginTop: 170, margin: 30}}>
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
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    marginTop: wp('20%'),
    paddingTop: wp('2%'),
    paddingBottom: wp('2%'),
    backgroundColor: '#006b8b',
    borderRadius: 10,
  },
});
