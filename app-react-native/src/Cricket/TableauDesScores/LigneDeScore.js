import React from "react";
import PropTypes from "prop-types";
import { TouchableHighlight, Vibration, View } from "react-native";
import { Col, Row } from "react-native-easy-grid";
import Touches from "./Touches";
import { Styles, Tailles } from "../../styles";
import Joueur from "./Joueur";

const LigneDeScore = ({ score, onLancerDansSimple, estVainqueur }) => (
  <Row style={Styles.bordureHaute}>
    <Col
      style={{ justifyContent: "center" }}
      size={Tailles.largeurDeLaColonneJoueur}
    >
      <Joueur
        estVainqueur={estVainqueur}
        joueur={score.joueur}
        penalite={score.penalite}
      />
    </Col>

    {Object.keys(score.cible).map(chiffre => {
      const { touches, ferme } = score.cible[chiffre];

      return (
        <Col
          style={[
            { flex: 1 },
            Styles.bordureGauche,
            ferme ? Styles.chiffreFerme : {}
          ]}
          key={chiffre}
        >
          <TouchableHighlight
            onPress={() => {
              onLancerDansSimple(score.joueur, chiffre);
              Vibration.vibrate(50);
            }}
            underlayColor="transparent"
            style={[{ flex: 1, alignSelf: "stretch" }, Styles.contenuAuMilieu]}
          >
            <View>
              <Touches symbole="X" nombre={touches} />
            </View>
          </TouchableHighlight>
        </Col>
      );
    })}
  </Row>
);

LigneDeScore.propTypes = {
  score: PropTypes.object.isRequired,
  estVainqueur: PropTypes.bool.isRequired,
  onLancerDansSimple: PropTypes.func.isRequired
};

export default LigneDeScore;
