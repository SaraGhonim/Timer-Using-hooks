import React, { Component } from "react";
import {
  Image,
  View,
  StyleSheet
} from "react-native";

import { Text } from "_atoms";
import { theme } from "../../constants";
import RNPickerSelect from 'react-native-picker-select';


class RenderHearingStatus extends Component {

  state = {
    HearingStatusValue: 'Normal',
    HearingLossValue: '',
    HearingLossCaseValue: '',
    HearingAidValue: '',
    HearingAidCasesValue: ''
  }
  HearingStatusDropDownList() {
    return (
      <RNPickerSelect
        onValueChange={(value) => this.setState({ HearingStatusValue: value })}
        items={[
          { label: 'Normal', value: 'Normal' },
          { label: 'Hearing Loss', value: 'HearingLoss' },
        ]}
      />
    );
  };
  HearingLossDropDownList() {
    return (
      <RNPickerSelect
        onValueChange={(value) => this.setState({ HearingLossValue: value })}
        items={[
          { label: 'Sensory Neural Hearing Loss', value: 'SensoryHL' },
          { label: 'Condective Hearing Loss', value: 'CondectiveHL' },
        ]}
      />
    );
  };
  HearingLossCasesDropDownList() {
    return (
      <RNPickerSelect
        onValueChange={(value) => this.setState({ HearingLossCaseValue: value })}
        items={[
          { label: 'Unilateral', value: 'Unilateral' },
          { label: 'Bilateral', value: 'Bilateral' },
        ]}
      />
    );
  };
  HearingAidDropDownList() {
    return (
      <RNPickerSelect
        onValueChange={(value) => this.setState({ HearingAidValue: value })}
        items={[
          { label: 'User', value: 'User' },
          { label: 'Not User', value: 'NotUser' },
        ]}
      />
    );
  };
  HearingAidCasesDropDownList() {
    return (
      <RNPickerSelect
        onValueChange={(value) => this.setState({ HearingAidCasesValue: value })}
        items={[
          { label: 'Binaural', value: 'Binaural' },
          { label: 'Monaural', value: 'Monaural' },
        ]}
      />
    );
  };
  renderHearingStatus() {
    return (
      <>
        <Image resizeMode="contain"
          // source={require("../assets/images/Icon/More.png")}
          style={styles.moreIcon}
        />
        <View style={{ marginBottom: 30, marginTop: 30 }}>

          <Text h3 bold color='#a9a9a9' left spacing={0.5} > Hearing Status </Text>
          {this.HearingStatusDropDownList()}
        </View>
        {/* <Block color="gray3" style={styles.hLine} /> */}
        {
          (this.state.HearingStatusValue == "HearingLoss") ?
            <View style={{ marginBottom: 20 }}>
              <Text h3 bold color='#a9a9a9' left spacing={0.5}> Hearing Loss Status </Text>
              {this.HearingLossDropDownList()}
            </View> : <></>
        }
        {
          (this.state.HearingStatusValue == "HearingLoss" && (this.state.HearingLossValue == "SensoryHL" || this.state.HearingLossValue == "CondectiveHL")) ?
            <View style={{ marginBottom: 20 }}>
              <Text h3 bold color='#a9a9a9' left spacing={0.5}>Hearing Aid </Text>
              {this.HearingLossCasesDropDownList()}</View> : <>{this.state.HearingLossValue == "SensoryHL" || this.state.HearingLossValue == "CondectiveHL" ?
                this.setState({ HearingLossValue: '', HearingLossCaseValue: '',HearingAidValue:'' }) : <></>}</>
        }
        {
          (this.state.HearingStatusValue == "HearingLoss" && (this.state.HearingLossCaseValue == "Unilateral" || this.state.HearingLossCaseValue == "Bilateral")) ?
            <View style={{ marginBottom: 20 }}>
              <Text h3 bold color='#a9a9a9' left spacing={0.5}>Hearing Aid </Text>
              {this.HearingAidDropDownList()}</View> : <>{this.state.HearingLossCaseValue == "Unilateral" || this.state.HearingLossValue == "Bilateral" ?
                this.setState({ HearingLossCaseValue: '', HearingLossValue: '' }) : <></>}</>
        }
        {
          (this.state.HearingAidValue == "User" && this.state.HearingStatusValue == "HearingLoss"&& (this.state.HearingLossValue == "SensoryHL" || this.state.HearingLossValue == "CondectiveHL") && (this.state.HearingLossCaseValue == "Unilateral" || this.state.HearingLossCaseValue == "Bilateral")) ?
            <View style={{ marginBottom: 20 }}>
              <Text h3 bold color='#a9a9a9' left spacing={0.5}>Hearing Aid </Text>
              {this.HearingAidCasesDropDownList()}</View> : <></>
        }
      </>
    );
  }
  render() {
    return (
      <React.Fragment>
        {this.renderHearingStatus()}
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({

  // horizontal line
  hLine: {
    marginVertical: theme.sizes.base * 2,
    marginHorizontal: theme.sizes.base * 2,
    height: 1
  },
  // vertical line
  vLine: {
    marginVertical: theme.sizes.base / 2,
    width: 1
  },

  moreIcon: {
    width: 16,
    height: 17,
    position: "absolute",
    right: theme.sizes.base,
    top: theme.sizes.base
  },

});

export default RenderHearingStatus;
