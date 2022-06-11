import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import ViewQuiDecale from "../../Kit/ViewQuiDecale";
import FormulaireInscription from "./FormulaireInscription";
import Titre from "./Titre";
import { Couleurs } from "../../styles";

function InscriptionDesJoueurs({
  inscrits,
  onInscription,
  onReordonner,
  onDesinscription,
  jeuxDisponibles,
  jeu,
  onChangementDeJeu,
  demarrerLaPartieEstPossible,
}) {
  return (
    <View style={{ flex: 1, backgroundColor: Couleurs.fond }}>
      <Titre />
      <View style={[{ flex: 1, alignItems: "center" }]}>
        <ViewQuiDecale
          dureeDuDecalage={900}
          coteDeDepart="right"
          style={[{ flex: 1, width: "80%" }]}
        >
          <FormulaireInscription onSubmit={onInscription} />
        </ViewQuiDecale>
      </View>
    </View>
  );
}

InscriptionDesJoueurs.propTypes = {
  inscrits: PropTypes.array.isRequired,
  onInscription: PropTypes.func.isRequired,
  onReordonner: PropTypes.func.isRequired,
  onDesinscription: PropTypes.func.isRequired,
  jeu: PropTypes.string.isRequired,
  jeuxDisponibles: PropTypes.array.isRequired,
  onChangementDeJeu: PropTypes.func.isRequired,
  demarrerLaPartieEstPossible: PropTypes.bool.isRequired,
};

export default InscriptionDesJoueurs;
