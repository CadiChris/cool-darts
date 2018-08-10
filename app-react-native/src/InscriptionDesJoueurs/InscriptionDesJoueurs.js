import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import Portrait from "../Technique/Portrait";
import ViewQuiDecale from "../Technique/ViewQuiDecale";
import ListeDesInscrits from "./ListeDesInscrits";
import DemarrerLaPartie from "./DemarrerLaPartie";
import FormulaireInscription from "./FormulaireInscription";

function InscriptionDesJoueurs({
  inscrits,
  onInscription,
  onDesinscription,
  jeu,
  demarrerLaPartieEstPossible
}) {
  return (
    <Portrait>
      <View style={[{ flex: 1, alignItems: "center" }]}>
        <ViewQuiDecale
          dureeDuDecalage={900}
          coteDeDepart="right"
          style={[{ flex: 1, width: "80%" }]}
        >
          <FormulaireInscription onSubmit={onInscription} />

          <ListeDesInscrits
            inscrits={inscrits}
            onDesinscription={onDesinscription}
          />
        </ViewQuiDecale>

        <ViewQuiDecale dureeDuDecalage={1000} coteDeDepart="left">
          <DemarrerLaPartie
            jeu={jeu}
            isDisabled={!demarrerLaPartieEstPossible}
          />
        </ViewQuiDecale>
      </View>
    </Portrait>
  );
}

InscriptionDesJoueurs.propTypes = {
  inscrits: PropTypes.array.isRequired,
  onInscription: PropTypes.func.isRequired,
  onDesinscription: PropTypes.func.isRequired,
  jeu: PropTypes.string.isRequired,
  demarrerLaPartieEstPossible: PropTypes.bool.isRequired
};

export default InscriptionDesJoueurs;
