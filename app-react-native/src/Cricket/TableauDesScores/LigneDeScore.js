import React from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableHighlight, Vibration } from "react-native";
import { Col, Row } from "react-native-easy-grid";
import Touches from "./Touches";
import { Styles, Tailles, Textes } from "../styles";

const LigneDeScore = ({ score, onLancerDansSimple }) => (
  <Row style={Styles.bordureHaute}>
    <Col
      style={{ justifyContent: "center" }}
      size={Tailles.largeurDeLaColonneJoueur}
    >
      <Text style={[Textes.light, { paddingLeft: 10 }]}>
        {score.joueur} - {score.points}
      </Text>
    </Col>

    {Object.keys(score.cible).map((chiffre, index) => {
      const { touches, ferme } = score.cible[chiffre];

      return (
        <Col
          style={[
            { flex: 1 },
            Styles.bordureGauche,
            ferme ? Styles.chiffreFerme : {}
          ]}
          key={index}
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
  onLancerDansSimple: PropTypes.func.isRequired
};

export default LigneDeScore;
