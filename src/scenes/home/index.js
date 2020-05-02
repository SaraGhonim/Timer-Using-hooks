import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  Button
} from 'react-native';

import { Block, Badge, Text } from '_atoms';
import { theme } from '../../constants';
import {
  RenderTrips,
  RenderMonthly,
  RenderTripButton,
  RenderAwards,
  HomeButton,
  ExistingPatient
} from '_molecules';
import { SearchBar } from 'react-native-elements';


class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };
  }
  // static navigationOptions = {
  //   headerTitle: <Text style={theme.fonts.header}>Welcome</Text>,
  //   headerRight: (
  //     <TouchableOpacity>
  //       <Block flex={false}>
  //         <Badge
  //           size={13}
  //           color={theme.colors.accent}
  //           style={{ position: 'absolute', top: -4, right: -4 }}
  //         />
  //       </Block>
  //     </TouchableOpacity>
  //   ),
  // };
  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    const { navigation } = this.props;

    return (
      <React.Fragment>
        <ScrollView style={styles.welcome} showsVerticalScrollIndicator={false}>
          <SearchBar
            lightTheme
            inputStyle={styles.search}
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={search}
          />
          <View style={{ marginBottom: theme.sizes.h1 }}></View>
          {/* <RenderMonthly /> */} hiiiii.. sam3a ah xD
          {/* <RenderAwards />  */}
          <RenderTrips />
          <View style={{ justifyContent: "space-between", flexDirection: 'row'  }}>
          <View>
          <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("PatientDetails")}>
          <HomeButton />
        </TouchableOpacity>
          </View>
          <View >
          <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("PatientDetails")}>
          <ExistingPatient />
        </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
        {/* <RenderTripButton navigation={this.props.navigation} /> */}
       
       
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    paddingVertical: theme.sizes.padding,
    paddingHorizontal: theme.sizes.padding,
    backgroundColor: theme.colors.gray4,
  },
  search: {
    // paddingVertical: theme.sizes.padding,
    paddingHorizontal: theme.sizes.body,
    backgroundColor: theme.colors.gray4,
  },
  button_1: {
    width: '40%',
    height: 30,
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
