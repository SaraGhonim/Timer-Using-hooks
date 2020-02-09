import React, { Component } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity ,Image,View} from 'react-native';
import { Card } from '_atoms';
import { RenderHearingStatus, RenderAwards } from '_molecules';
import { theme } from '../../constants';

export default class StatusScreen extends Component {

  render() {
    const { navigation } = this.props;

    return (
      <ScrollView style={styles.welcome} showsVerticalScrollIndicator={false}>
  <View style={styles.container}>
              <Image
                source={require('_assets/images/continue.png')}
              />
            </View>
        <Card>
          <RenderHearingStatus />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("TestOptions")}>
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
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 7,
  },
  checkbox: {
    marginLeft: 29,
    marginBottom: 28,
    marginRight: 20,
  },
  checkbox2: {
    marginLeft: 29,
    marginBottom: 28,
    marginRight: 17,
  },
});