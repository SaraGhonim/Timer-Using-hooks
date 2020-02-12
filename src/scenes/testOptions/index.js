import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';
import {
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
// import Icon from 'react-native-vector-icons/FontAwesome';

import { selectColors } from '../../constants/mocks';
import {RenderAwards} from '_molecules';
import { Card, Text,Icon } from "_atoms";
import { theme } from "../../constants";



export default class TestOptions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      IntervalValue: 0, Post_Click_Interval: 0, statementsNumber: 5,
      selected: 0,
    };
  }

  renderColorButtons = () => {
    return (

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
        {selectColors.map((color, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  selected: index,
                });
              }}
              style={{
                margin: 5,
                // marginRight: 15,
                backgroundColor: color,
                width: 50,
                height: 50,
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {index === this.state.selected ? (
                // <Icon name="check" size={15} color="white" />
                <Icon/>
              ) : null}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  render() {
    const { navigation } = this.props;
    return (
        <ScrollView style={styles.welcome} showsVerticalScrollIndicator={false}>
            <Image 
              source={require('_assets/images/test.png')}/>
          <Card shadow style={{ paddingVertical: theme.sizes.base, paddingHorizontal: 3}}>
            <Card shadow style={{ paddingVertical: theme.sizes.base, paddingHorizontal: 3 }}>
              <TextInput
                style={{ marginBottom: 10 }}
                onChangeText={IntervalValue => this.setState({ IntervalValue })}
                value={this.state.IntervalValue}
                keyboardType="default"
                autoCorrect={false}
                maxLength={30}
                multiline={false}
                placeholder="The Interval"
                underlineColorAndroid="#a9a9a9"></TextInput>
            </Card>
            <Card shadow style={{ paddingVertical: theme.sizes.base, paddingHorizontal: 3 }}>
            <TextInput
                style={{ marginBottom: 10 }}
                onChangeText={Post_Click_Interval => this.setState({ Post_Click_Interval })}
                value={this.state.Post_Click_Interval}
                keyboardType="default"
                autoCorrect={false}
                maxLength={30}
                multiline={false}
                placeholder="The Post Click Interval"
                underlineColorAndroid="#a9a9a9"></TextInput>
            </Card>
            <Card shadow style={{ paddingVertical: theme.sizes.base, paddingHorizontal: 3 }}>
            <TextInput
                style={{ marginBottom: 10 }}
                onChangeText={statementsNumber => this.setState({ statementsNumber })}
                value={this.state.statementsNumber}
                keyboardType="default"
                autoCorrect={false}
                maxLength={30}
                multiline={false}
                placeholder="Number of Test's Statements "
                underlineColorAndroid="#a9a9a9"></TextInput>
            </Card>
            <View style={{  marginBottom: 25 }}></View>
            <Text h3 spacing={.1} color='#a9a9a9' style={{  marginHorizontal: 10 }}>Select Color</Text>
            {this.renderColorButtons()}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Test",{
                interval: this.state.IntervalValue,
                color: selectColors[this.state.selected],
                statementsNumber:this.state.statementsNumber,
                Post_Click_Interval:this.state.Post_Click_Interval
              
              })}>
              <RenderAwards />
            </TouchableOpacity>
          </Card>
        </ScrollView>
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
    backgroundColor: "#27A9FF",
    borderRadius: 10,
  },
});
