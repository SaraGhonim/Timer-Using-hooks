import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image
} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

import { selectColors } from '../../constants/mocks';

import { Card } from "_atoms";
import { theme } from "../../constants";
const { width } = Dimensions.get("window");
import { RenderAwards, RenderHearingStatus } from '_molecules';
import { SearchBar } from 'react-native-elements';


export default class TestOptions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
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
                <Icon name="check" size={15} color="white" />
              ) : null}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { navigation } = this.props;
    const { search } = this.state;

    return (
      <View>
        <ScrollView style={styles.welcome} showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Image
              source={require('_assets/images/infoo.png')}
            />
          </View>
          
          <SearchBar
            lightTheme
            inputStyle={styles.search}
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={search}
          />
          <Card shadow style={{ paddingVertical: theme.sizes.base, paddingHorizontal: 3 }}>

            <Card shadow style={{ paddingVertical: theme.sizes.base, paddingHorizontal: 3 }}>
              <TextInput
                style={styles.input}
                onChangeText={IntervalValue => this.setState({ IntervalValue })}
                value={this.state.IntervalValue}
                keyboardType="email-address"
                autoCorrect={false}
                maxLength={6}
                multiline={false}
                placeholder="First Name"
              ></TextInput>
            </Card>
            <Card shadow style={{ paddingVertical: theme.sizes.base, paddingHorizontal: 3 }}>
              <TextInput
                style={styles.input}
                onChangeText={IntervalValue => this.setState({ IntervalValue })}
                value={this.state.IntervalValue}
                keyboardType="email-address"
                autoCorrect={false}
                maxLength={6}
                multiline={false}
                placeholder="Last Name"
              ></TextInput>
            </Card>
            <Card shadow style={{ paddingVertical: theme.sizes.base, paddingHorizontal: 3 }}>
              <TextInput
                style={styles.input}
                onChangeText={IntervalValue => this.setState({ IntervalValue })}
                value={this.state.IntervalValue}
                autoCorrect={false}
                maxLength={6}
                multiline={false}
                placeholder="Age"
              ></TextInput>
            </Card>
            <Card shadow style={{ paddingVertical: theme.sizes.base, paddingHorizontal: 3 }}>
              <TextInput
                style={styles.input}
                onChangeText={IntervalValue => this.setState({ IntervalValue })}
                value={this.state.IntervalValue}
                autoCorrect={false}
                maxLength={6}
                multiline={false}
                placeholder="Address"
              ></TextInput>
            </Card>
            <Card shadow style={{ paddingVertical: theme.sizes.base, paddingHorizontal: 3 }}>
              <TextInput
                style={styles.input}
                onChangeText={IntervalValue => this.setState({ IntervalValue })}
                value={this.state.IntervalValue}
                autoCorrect={false}
                maxLength={6}
                multiline={false}
                placeholder="Occupation"
              ></TextInput>
            </Card>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Status")}>
              <RenderAwards />
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
    paddingTop: wp('2%'),
    paddingBottom: wp('2%'),
    backgroundColor: "#27A9FF",
    borderRadius: 10,
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  startTrip: {
    marginTop: 50,
    position: "absolute",
    left: (width - 190) / 2,
    bottom: -40
  }

});
