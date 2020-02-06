
import React, { Component } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import * as Icon from "react-native-vector-icons";
 import LinearGradient  from 'react-native-linear-gradient';

import { Block, Badge, Card, Text } from "_atoms";
import { styles as blockStyles } from "_atoms/Block";
import { styles as cardStyles } from "_atoms/Card";
import { theme, mocks } from "../../constants";

const { width } = Dimensions.get("window");
import RNPickerSelect from 'react-native-picker-select';
 
 
class RenderHearingStatus extends Component {
   
  
     dropdown  () {
        return (
            <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: 'Normal', value: 'Normal' },
                    { label: 'Bilateral HL', value: 'Bilateral HL' },
                    { label: 'Unilateral HL', value: 'Unilateral HL' },
                    { label: 'Condective HL', value: 'Condective HL' },

                ]}
            />
        );
    };
    dropdown2 () {
        return (
            <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: 'User', value: 'User' },
                    { label: 'Not User', value: 'Not User' },

                ]}
            />
        );
    };
    renderHearingStatus() {
      const { navigation } = this.props;
  
      return (
        // <TouchableOpacity
        //   activeOpacity={0.8}
        //   onPress={() => navigation.navigate("Status")}
        // >
          <Card shadow style={{ paddingVertical: theme.sizes.padding }}>
            <Image
              resizeMode="contain"
              // source={require("../assets/images/Icon/More.png")}
              style={styles.moreIcon}
            />
            <Block>
              <Block center>
                <Text h3 primary spacing={1.7}>
                  Hearing Status
                </Text>
              </Block>
              {this.dropdown()}

              <Block color="gray3" style={styles.hLine} />
  
             
  
  
                <Block center>
                  <Text
                  center
                    size={20}
                    spacing={0.6}
                    primary
                    style={{ marginBottom: 6 }}
                  >
                    Hearing Aid
                 </Text>
                 {this.dropdown2()}

                  {/* <Text body spacing={0.7}>
                    Level
                  </Text> */}
                </Block>
            </Block>
          </Card>
        
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
  