import React from "react";
import { Text } from "react-native";
import { Tailles, Styles, Textes } from "../styles";

import { Col, Row } from "react-native-easy-grid";

export default () => (
  <Row style={{ height: Tailles.hauteurEnTete }}>
    <Col size={Tailles.largeurDeLaColonneJoueur} />
    {[15, 16, 17, 18, 19, 20, "Bull"].map(chiffre => (
      <Col key={chiffre} style={[Styles.bordureGauche, Styles.contenuAuMilieu]}>
        <Text style={[Textes.titre, { fontSize: 15, textAlign: "center" }]}>
          {chiffre}
        </Text>
      </Col>
    ))}
  </Row>
);
