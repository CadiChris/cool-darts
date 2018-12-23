import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import Portrait from "../../Kit/Portrait";
import ViewQuiDecale from "../../Kit/ViewQuiDecale";
import ListeDesInscrits from "./ListeDesInscrits";
import DemarrerLaPartie from "./DemarrerLaPartie";
import FormulaireInscription from "./FormulaireInscription";
import ChoixDuJeu from "./ChoixDuJeu";
import Titre from "./Titre";

function InscriptionDesJoueurs({
  inscrits,
  onInscription,
  onDesinscription,
  jeuxDisponibles,
  jeu,
  onChangementDeJeu,
  demarrerLaPartieEstPossible
}) {
  return (
    <Portrait>
      <Titre />
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
          <ChoixDuJeu
            jeuxDisponibles={jeuxDisponibles}
            jeuChoisi={jeu}
            onChangementDeJeu={onChangementDeJeu}
          />
        </ViewQuiDecale>

        <ViewQuiDecale dureeDuDecalage={900} coteDeDepart="left">
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
  jeuxDisponibles: PropTypes.array.isRequired,
  onChangementDeJeu: PropTypes.func.isRequired,
  demarrerLaPartieEstPossible: PropTypes.bool.isRequired
};

export default InscriptionDesJoueurs;
