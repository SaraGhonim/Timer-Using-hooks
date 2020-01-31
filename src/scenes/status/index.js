import React from 'react';
import {
  ApplicationProvider,
  Layout,
  Text,
  CheckBox,
  Button,
} from '@ui-kitten/components';
import {mapping, light as lightTheme} from '@eva-design/eva';
import {StyleSheet, View} from 'react-native';
// import {CheckboxStatesShowcase} from '_atoms';
import {Right_button} from '_atoms';

const HomeScreen = ({navigation}) => (
  <Layout style={{flex: 1}}>
    <Text
      style={{marginBottom: 10, fontSize: 21, marginTop: 30, marginLeft: 18}}>
      Hearing Status
    </Text>
    <CheckboxStatesShowcase />
    <Button
      style={{margin: 40, marginLeft: 60, marginRight: 60, borderRedius: 20}}
      onPress={() => navigation.navigate('SetInterval')}>
      Next
    </Button>
  </Layout>
);

export const CheckboxStatesShowcase = () => {
  const [normalChecked, setNormalChecked] = React.useState(false);
  const [bilateralChecked, setBilateralChecked] = React.useState(false);
  const [unilateralChecked, setUnilateralChecked] = React.useState(false);
  const [conductiveChecked, setConductiveChecked] = React.useState(false);

  const [userChecked, setUserChecked] = React.useState(false);
  const [notUserChecked, setNotUserChecked] = React.useState(false);
  const [MonauralChecked, setMonauralChecked] = React.useState(false);
  const [BinauralChecked, setBinauralChecked] = React.useState(false);

  const [disabled1, setdisabled1] = React.useState(true);
  const [disabled2, setdisabled2] = React.useState(true);
  const [disabled3, setdisabled3] = React.useState(true);
  const [disabled4, setdisabled4] = React.useState(true);

  const [disabled5, setdisabled5] = React.useState(false);
  const [disabled6, setdisabled6] = React.useState(false);
  const [disabled7, setdisabled7] = React.useState(false);
  const [disabled8, setdisabled8] = React.useState(false);

  const onUserChange = isChecked => {
    setUserChecked(isChecked);
    setdisabled2(disabled2 => !disabled2);

    setdisabled3(disabled3 => !disabled3);
    setdisabled4(disabled4 => !disabled4);
  };

  const onNotUserChange = isChecked => {
    setNotUserChecked(isChecked);
    setdisabled1(disabled1 => !disabled1);
    if (BinauralChecked || MonauralChecked) {
      setBinauralChecked(isChecked);
      setMonauralChecked(isChecked);
    }
  };
  const onBinauralChange = isChecked => {
    setBinauralChecked(isChecked);
    setdisabled4(disabled4 => !disabled4);
  };
  const onMonauralChange = isChecked => {
    setMonauralChecked(isChecked);
    setdisabled3(disabled3 => !disabled3);
  };

  const onNormalChange = isChecked => {
    setNormalChecked(isChecked);
    setdisabled7(disabled7 => !disabled7);
    setdisabled6(disabled6 => !disabled6);
    setdisabled8(disabled8 => !disabled8);
  };

  const onBilateralChange = isChecked => {
    setBilateralChecked(isChecked);
    setdisabled1(disabled1 => !disabled1);
    setdisabled2(disabled2 => !disabled2);
    if (
      (userChecked && !isChecked) ||
      (notUserChecked && !isChecked) ||
      (BinauralChecked && !isChecked) ||
      (MonauralChecked && !isChecked)
    ) {
      setUserChecked(isChecked);
      setNotUserChecked(isChecked);
      setdisabled1(!isChecked);
      setdisabled2(!isChecked);
      setdisabled3(!isChecked);
      setdisabled4(!isChecked);
      setBinauralChecked(isChecked);
      setMonauralChecked(isChecked);
    }

    setdisabled5(disabled5 => !disabled5);
    setdisabled7(disabled7 => !disabled7);
    setdisabled8(disabled8 => !disabled8);
  };
  const onUnilateralChange = isChecked => {
    setUnilateralChecked(isChecked);
    setdisabled1(disabled1 => !disabled1);
    setdisabled2(disabled2 => !disabled2);
    if (
      (userChecked && !isChecked) ||
      (notUserChecked && !isChecked) ||
      (BinauralChecked && !isChecked) ||
      (MonauralChecked && !isChecked)
    ) {
      setUserChecked(isChecked);
      setNotUserChecked(isChecked);
      setdisabled1(!isChecked);
      setdisabled2(!isChecked);

      setdisabled3(!isChecked);
      setdisabled4(!isChecked);
      setBinauralChecked(isChecked);
      setMonauralChecked(isChecked);
    }
    setdisabled5(disabled5 => !disabled5);
    setdisabled6(disabled6 => !disabled6);
    setdisabled8(disabled8 => !disabled8);
  };
  const onConductiveChange = isChecked => {
    setConductiveChecked(isChecked);
    setdisabled1(disabled1 => !disabled1);
    setdisabled2(disabled2 => !disabled2);
    if (
      (userChecked && !isChecked) ||
      (notUserChecked && !isChecked) ||
      (BinauralChecked && !isChecked) ||
      (MonauralChecked && !isChecked)
    ) {
      setUserChecked(isChecked);
      setNotUserChecked(isChecked);
      setdisabled1(!isChecked);
      setdisabled2(!isChecked);

      setdisabled3(!isChecked);
      setdisabled4(!isChecked);
      setBinauralChecked(isChecked);
      setMonauralChecked(isChecked);
    }
    setdisabled5(disabled5 => !disabled5);
    setdisabled7(disabled7 => !disabled7);
    setdisabled6(disabled6 => !disabled6);
  };

  return (
    <Layout>
      <Layout style={styles.container}>
        <CheckBox
          style={styles.checkbox}
          text="Normal"
          checked={normalChecked}
          disabled={disabled5}
          onChange={onNormalChange}
        />

        <CheckBox
          style={styles.checkbox}
          text="Bilateral SNHL"
          checked={bilateralChecked}
          disabled={disabled6}
          onChange={onBilateralChange}
        />

        <CheckBox
          style={styles.checkbox}
          text="Unilateral HL"
          disabled={disabled7}
          onChange={onUnilateralChange}
          checked={unilateralChecked}
        />
        <CheckBox
          style={styles.checkbox}
          text="Conductive HL"
          disabled={disabled8}
          onChange={onConductiveChange}
          checked={conductiveChecked}
        />

        {/* <CheckBox
        style={styles.checkbox}
        text="Checked Disabled"
        disabled={true}
        checked={true}
      /> */}
      </Layout>

      <Text
        style={{marginBottom: 10, fontSize: 21, marginTop: 30, marginLeft: 18}}>
        Hearing aid
      </Text>

      <Layout>
        <Layout style={styles.container2}>
          <Layout style={{marginRight: 39, backgroundColor: 'white'}}>
            <CheckBox
              style={styles.checkbox}
              text="User"
              checked={userChecked}
              onChange={onUserChange}
              disabled={disabled1}
            />
          </Layout>
          <Layout style={{backgroundColor: 'white'}}>
            <CheckBox
              style={styles.checkbox}
              text="Not user"
              checked={notUserChecked}
              onChange={onNotUserChange}
              disabled={disabled2}
            />
          </Layout>
        </Layout>
        <Layout
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            backgroundColor: 'white',
          }}>
          <Layout style={{marginRight: 18, backgroundColor: 'white'}}>
            <CheckBox
              style={styles.checkbox}
              text="Binaural"
              checked={BinauralChecked}
              onChange={onBinauralChange}
              disabled={disabled3}
            />
          </Layout>
          <Layout style={{width: 144}}>
            <CheckBox
              style={styles.checkbox}
              text="Monaural"
              checked={MonauralChecked}
              onChange={onMonauralChange}
              disabled={disabled4}
            />
          </Layout>
        </Layout>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
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

const Status = ({navigation}) => (
  <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <HomeScreen navigation={navigation} />
  </ApplicationProvider>
);

export default Status;
