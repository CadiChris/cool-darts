import React from "react";
import PropTypes from "prop-types";
import * as Animatable from "react-native-animatable";
import { View } from "react-native";
import Celebration from "../../Technique/Celebration";
import { Styles } from "../../styles";
import Vainqueurs from "./Vainqueurs";
import { splitArray } from "../../utils/splitArray";
import { ColonneDesChiffres } from "./ColonneDesChiffres";
import { LARGEUR_COLONNE_JOUEUR } from "./dimensions";
import { ColonneJoueur } from "./ColonneJoueur";

const TableauDesScores = ({
  scores,
  onLancerDansSimple,
  vainqueurs,
  actif
}) => (
  <Animatable.View style={[{ flex: 1 }]} animation="bounceInRight">
    {vainqueurs.length > 0 && <Celebration />}
    <View style={{ flexDirection: "row" }}>
      {splitArray(scores).premier.map(score => (
        <ColonneJoueur
          key={score.joueur}
          score={score}
          style={[
            {
              width: LARGEUR_COLONNE_JOUEUR(scores.length)
            },
            Styles.bordureDroite
          ]}
          actif={actif}
          onLancerDansSimple={onLancerDansSimple}
        />
      ))}

      {ColonneDesChiffres}

      {splitArray(scores).second.map(score => (
        <ColonneJoueur
          key={score.joueur}
          score={score}
          style={[
            {
              width: LARGEUR_COLONNE_JOUEUR(scores.length)
            },
            Styles.bordureGauche
          ]}
          actif={actif}
          onLancerDansSimple={onLancerDansSimple}
        />
      ))}
    </View>

    {vainqueurs.length > 0 && <Vainqueurs noms={vainqueurs} />}
  </Animatable.View>
);

TableauDesScores.propTypes = {
  scores: PropTypes.array.isRequired,
  onLancerDansSimple: PropTypes.func.isRequired,
  vainqueurs: PropTypes.array.isRequired,
  actif: PropTypes.bool.isRequired
};

export default TableauDesScores;
