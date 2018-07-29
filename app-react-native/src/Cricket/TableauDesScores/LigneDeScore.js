import React from "react";
import PropTypes from "prop-types";
import LocalizedStrings from "react-native-localization";
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
      <View style={{ paddingLeft: 10 }}>
        <Text style={[Textes.basique]}>{score.joueur}</Text>
        <Text style={[Textes.light]}>
          {`${textes.penalite} ${score.penalite}`}
        </Text>
      </View>
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
  onLancerDansSimple: PropTypes.func.isRequired
};

const textes = new LocalizedStrings({
  en: {
    penalite: "Penalty:"
  },
  fr: {
    penalite: "Pénalité :"
  }
});

export default LigneDeScore;
