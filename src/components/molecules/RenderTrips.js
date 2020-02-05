import React, { Component } from "react";
import {
  Dimensions,
  ScrollView,
} from "react-native";
import rgba from "hex-to-rgba";
import * as Icon from "react-native-vector-icons";
 import LinearGradient  from 'react-native-linear-gradient';

import { Block, Badge, Card, Text } from "_atoms";
import { styles as blockStyles } from "../atoms/Block";
import { styles as cardStyles } from "../atoms/Card";
import { theme, mocks } from "../../constants";

const { width } = Dimensions.get("window");


class RenderTrips extends Component {
  

  renderTrip = trip => {
    return (
      <Card shadow key={`trip-${trip.id}`}>
        <Block row space="between" style={{ marginBottom: theme.sizes.base }}>
          <Text spacing={0.5} caption>
            {trip.date}
          </Text>
          <Text spacing={0.5} caption medium primary>
            {trip.score}
          </Text>
          <Text spacing={0.5} caption>
            {trip.distance}
          </Text>
        </Block>
        <Block row center>
          <Badge
            color={rgba(theme.colors.accent, "0.2")}
            size={14}
            style={{ marginRight: 8 }}
          >
            <Badge color={theme.colors.accent} size={8} />
          </Badge>
          <Text spacing={0.5} color="gray">
            {trip.from}
          </Text>
        </Block>

        <Block row center style={{ paddingVertical: 4 }}>
          <Badge color="gray2" size={4} style={{ marginLeft: 4.5 }} />
        </Block>

        <Block row center>
          <Badge
            color={rgba(theme.colors.primary, "0.2")}
            size={14}
            style={{ marginRight: 8 }}
          >
            <Badge color={theme.colors.primary} size={8} />
          </Badge>
          <Text spacing={0.5} color="gray">
            {trip.to}
          </Text>
        </Block>
      </Card>
    );
  };

  renderTrips() {
    return (
      <React.Fragment>
        <Block style={{ marginBottom: theme.sizes.base }}>
          <Text spacing={0.4} transform="uppercase">
            Recent Tests
          </Text>
        </Block>

        {mocks.trips.map(trip => this.renderTrip(trip))}
      </React.Fragment>
    );
  }

 
  render() {
    return (
      <React.Fragment>
            
          {this.renderTrips()}
      </React.Fragment>
    );
  }
}


export default RenderTrips;
