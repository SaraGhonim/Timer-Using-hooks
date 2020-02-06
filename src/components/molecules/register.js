import React, {Component} from 'react';
import {
  StyleSheet,
  Text,ScrollView,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {RenderAwards, RenderMonthly, RenderHomeButton} from '_molecules';

export default class Register extends Component {
  //   static navigationOptions = {drawerIcon:(tintColor)=>(<Icon name="home"/>)};
  constructor(props) {
    super(props);

    this.state = {
      click: 2,
    };
  }

  render() {
    return (
      <View style={{margin: 20}}>
                <ScrollView style={styles.welcome} showsVerticalScrollIndicator={false}>

                <RenderAwards/>

        <View style={{marginBottom: 20}}>
          <TextInput
            keyboardType="default"
            autoCorrect={false}
            maxLength={30}
            multiline={false}
            placeholder="Name"
            underlineColorAndroid="#a9a9a9"></TextInput>
        </View>
        <View style={{marginBottom: 20}}>
          <TextInput
            keyboardType="default"
            autoCorrect={false}
            maxLength={30}
            multiline={false}
            placeholder="Gender"
            underlineColorAndroid="#a9a9a9"></TextInput>
        </View>
        <View style={{marginBottom: 20}}>
          <TextInput
            keyboardType="default"
            autoCorrect={false}
            maxLength={30}
            multiline={false}
            placeholder="Address"
            underlineColorAndroid="#a9a9a9"></TextInput>
        </View>

       
        <View style={{marginBottom: 20}}>
          <TextInput
            keyboardType="default"
            autoCorrect={false}
            maxLength={30}
            multiline={false}
            placeholder="Age"
            underlineColorAndroid="#a9a9a9"></TextInput>
        </View>
       
        <View style={{marginBottom: 20}}>
          <TextInput
            keyboardType="default"
            autoCorrect={false}
            maxLength={30}
            multiline={false}
            placeholder="Occupation"
            underlineColorAndroid="#a9a9a9"></TextInput>
        </View>
        <View style={{marginBottom: 20}}>
          <TextInput
            keyboardType="default"
            autoCorrect={false}
            maxLength={30}
            multiline={false}
            placeholder="Date"
            underlineColorAndroid="#a9a9a9"></TextInput>
        </View>
        {/* //this.props.navigation.navigate('Home') */}
        <TouchableOpacity
          style={styles.buttonContainer2}
          onPress={() => this.props.navigation.navigate('Status')}>
          <Text
            style={{
              textAlign: 'center',
              paddingTop: 5,
              paddingBottom: 5,
              color: 'white',
              fontSize:20
            }}>
            {' '}
            Start
          </Text>
        </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttonContainer2: {
    backgroundColor: '#006b8b',
    paddingTop: 5,
    paddingBottom: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 60,
    margin: 20,
    alignItems: 'center',
    marginBottom: 60,
  },
});


// UNSAFE_componentWillMount() {
//   this._panResponder = PanResponder.create({
//     onMoveShouldSetPanResponder: (event, gestureState) => true,
//     onPanResponderMove: this._onPanResponderMove.bind(this),
//     onPanResponderRelease: this._onPanResponderRelease.bind(this)
//   });
// }