import React from "react";
import PropTypes from "prop-types";
import * as Animatable from "react-native-animatable";
import { Grid } from "react-native-easy-grid";
import EnTete from "./EnTete";
import LigneDeScore from "./LigneDeScore";
import { Styles } from "../../styles";
import Celebration from "../../Technique/Celebration";

const TableauDesScores = ({
  scores,
  onLancerDansSimple,
  vainqueurs,
  actif
}) => (
  <Animatable.View style={[{ flex: 1 }]} animation="bounceInRight">
    {vainqueurs.length > 0 && <Celebration />}

    <Grid style={[{ flexDirection: "column" }, Styles.bordureBasse]}>
      <EnTete />
      {scores.map((score, index) => (
        <LigneDeScore
          score={score}
          estVainqueur={vainqueurs.includes(score.joueur)}
          key={index}
          onLancerDansSimple={(joueur, chiffre) => {
            if (!actif) return;
            onLancerDansSimple(joueur, chiffre);
          }}
        />
      ))}
    </Grid>
  </Animatable.View>
);

TableauDesScores.propTypes = {
  scores: PropTypes.array.isRequired,
  onLancerDansSimple: PropTypes.func.isRequired,
  vainqueurs: PropTypes.array.isRequired,
  actif: PropTypes.bool.isRequired
};

export default TableauDesScores;
