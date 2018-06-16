import React from "react";
import * as Animatable from "react-native-animatable";
import { StyleSheet, Text } from "react-native";
import { Grid } from "react-native-easy-grid";
import EnTete from "./EnTete";
import LigneDeScore from "./LigneDeScore.container";
import { Styles } from "../styles";

export default ({ scores }) => (
  <Animatable.View style={[{ flex: 1 }]} animation="bounceInRight">
    <Grid style={[{ flexDirection: "column" }, Styles.bordureBasse]}>
      <EnTete />
      {scores.map((score, index) => <LigneDeScore score={score} key={index} />)}
    </Grid>
  </Animatable.View>
);
