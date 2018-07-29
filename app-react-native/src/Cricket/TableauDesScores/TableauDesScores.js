import React from "react";
import PropTypes from "prop-types";
import * as Animatable from "react-native-animatable";
import { Grid } from "react-native-easy-grid";
import EnTete from "./EnTete";
import LigneDeScore from "./LigneDeScore";
import { Styles } from "../styles";

const TableauDesScores = ({ scores, onLancerDansSimple }) => (
  <Animatable.View style={[{ flex: 1 }]} animation="bounceInRight">
    <Grid style={[{ flexDirection: "column" }, Styles.bordureBasse]}>
      <EnTete />
      {scores.map((score, index) => (
        <LigneDeScore
          score={score}
          key={index}
          onLancerDansSimple={onLancerDansSimple}
        />
      ))}
    </Grid>
  </Animatable.View>
);

TableauDesScores.propTypes = {
  scores: PropTypes.array.isRequired,
  onLancerDansSimple: PropTypes.func.isRequired
};

export default TableauDesScores;
