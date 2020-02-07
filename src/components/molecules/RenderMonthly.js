
import React, { Component } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import { Block, Card, Text } from "_atoms";
import { theme } from "../../constants";
class RenderMonthly extends Component {
   
  
    renderMonthly() {
      const { navigation } = this.props;
  
      return (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Status")}
        >
          <Card shadow style={{ paddingVertical: theme.sizes.padding }}>
            <Image
              resizeMode="contain"
              // source={require("../assets/images/Icon/More.png")}
              style={styles.moreIcon}
            />
  
            <Block>
              <Block center>
                <Text h3 primary spacing={1.7}>
                  Search
                </Text>
                <Text spacing={0.7}>Monthly Average</Text>
              </Block>
  
              <Block color="gray3" style={styles.hLine} />
  
              <Block row>
                <Block center>
                  <Text
                    size={20}
                    spacing={0.6}
                    primary
                    style={{ marginBottom: 6 }}
                  >
                    From
                  </Text>
                  <Text body spacing={0.7}>
                    1/1/2020
                  </Text>
                  {/* <Text body spacing={0.7}>
                    Score
                  </Text> */}
                </Block>
  
                <Block flex={false} color="gray3" style={styles.vLine} />
  
                <Block center>
                  <Text
                    size={20}
                    spacing={0.6}
                    primary
                    style={{ marginBottom: 6 }}
                  >
                    To
                  </Text>
                  <Text body spacing={0.7}>
                    1/2/2020
                  </Text>
                  {/* <Text body spacing={0.7}>
                    Level
                  </Text> */}
                </Block>
              </Block>
            </Block>
          </Card>
        </TouchableOpacity>
      );
    }
  
  
  
   
    render() {
      return (
        <React.Fragment>
            {this.renderMonthly()} 
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
  
  export default RenderMonthly;
  