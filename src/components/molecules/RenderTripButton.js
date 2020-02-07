
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
import rgba from "hex-to-rgba";

const { width } = Dimensions.get("window");

class RenderTripButton extends Component {
   
  
    renderTripButton() {
        const { navigation } = this.props;
    
        return (
          <Block center middle style={styles.startTrip}>
    
             <Badge color={rgba(theme.colors.primary, "0.1")} size={144}> 
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate("PatientDetails")}
              >
                <Badge color={theme.colors.primary} size={62}>
                <Text h3>Start</Text>
    
                  {/* <Icon.FontAwesome
                    name="automobile"
                    size={62 / 2.5}
                    color="white"
                  /> */}
                </Badge> 
              </TouchableOpacity>
             </Badge> 
          </Block>
        );
      }
    
  
   
    render() {
      return (
        <React.Fragment>
            {this.renderTripButton()} 
        </React.Fragment>
      );
    }
  }
  
  const styles = StyleSheet.create({
   

    startTrip: {
        position: "absolute",
        left: (width - 144) / 2,
        bottom: 0
      }
    
  });
  
  export default RenderTripButton;
  