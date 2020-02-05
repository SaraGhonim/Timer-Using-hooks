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

class RenderAwards extends Component {
  renderAwards() {
    return (
      <LinearGradient
        end={{x: 1, y: 0}}
        style={[blockStyles.row, cardStyles.card, styles.awards]}
        colors={['#FF988A', theme.colors.accent]}>
        <Block middle flex={0.4}>
          <Badge color={rgba(theme.colors.white, '0.2')} size={74}>
            <Badge color={rgba(theme.colors.white, '0.2')} size={52}>
              {/* <Icon.FontAwesome
                    name="trophy"
                    color="white"
                    size={theme.sizes.h2}
                  /> */}
            </Badge>
          </Badge>
        </Block>
        <Block middle>
          <Text size={theme.sizes.base} spacing={0.4} medium white>
            Thank You!
          </Text>
          <Text size={theme.sizes.base} spacing={0.4} medium white>
            For Using this{' '}
          </Text>
        </Block>
      </LinearGradient>
    );
  }

  render() {
    return <React.Fragment>{this.renderAwards()}</React.Fragment>;
  }
}

const styles = StyleSheet.create({
  awards: {
    padding: theme.sizes.base,
    marginBottom: theme.sizes.padding,
  },
});

export default RenderAwards;
