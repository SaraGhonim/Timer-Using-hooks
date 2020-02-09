import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, TouchableOpacity} from 'react-native';
import * as Icon from 'react-native-vector-icons';
import LinearGradient from 'react-native-linear-gradient';

import {Block, Badge, Card, Text} from '_atoms';
import {styles as blockStyles} from '_atoms/Block';
import {styles as cardStyles} from '_atoms/Card';
import {theme, mocks} from '../../constants';
import rgba from "hex-to-rgba";

const {width} = Dimensions.get('window');

class TestOptionButton extends Component {
    testOptionButton() {
    const { navigation } = this.props;
    return (
      <LinearGradient
        end={{x: 1, y: 0}}
        style={[blockStyles.row, cardStyles.card, styles.awards]}
        colors={['#FF955A', theme.colors.accent]}>
          
        <Block middle>
          <Text  size={theme.sizes.title} spacing={4} center bold  white>
            Next
          </Text>
        </Block>
      </LinearGradient>
    );
  }

  render() {
      return <React.Fragment>{this.testOptionButton()}</React.Fragment>;
  }
}

const styles = StyleSheet.create({
  awards: {
    // padding: theme.sizes.h3,
    // marginBottom: theme.sizes.padding,
    margin: theme.sizes.h3,

  },
});

export default TestOptionButton;
