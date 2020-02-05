import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import * as Icon from 'react-native-vector-icons';
import LinearGradient from 'react-native-linear-gradient';

import {Block, Badge, Card, Text} from '_atoms';
import {theme, mocks} from '../../constants';
import {
  RenderTrips,
  RenderMonthly,
  RenderTripButton,
  RenderAwards,
} from '_molecules';

const {width} = Dimensions.get('window');

class HomeScreen extends Component {
  static navigationOptions = {
    headerTitle: <Text style={theme.fonts.header}>Welcome</Text>,
    headerRight: (
      <TouchableOpacity>
        <Block flex={false}>
          <Image
            resizeMode="contain"
            source={require('_assets/images/i6.jpg')}
            style={{width: 20, height: 24}}
          />
          <Badge
            size={13}
            color={theme.colors.accent}
            style={{position: 'absolute', top: -4, right: -4}}
          />
        </Block>
      </TouchableOpacity>
    ),
  };

  render() {
    return (
      <React.Fragment>
        <ScrollView style={styles.welcome} showsVerticalScrollIndicator={false}>
          <RenderMonthly />
          <RenderAwards /
          > 
          <RenderTrips />
        </ScrollView>
        <RenderTripButton navigation={this.props.navigation}/>
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
});

export default HomeScreen;
