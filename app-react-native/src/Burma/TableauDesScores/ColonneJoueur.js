import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import { Styles, Textes } from "../../styles";
import { Joueur } from "./Joueur";
import { HAUTEUR_DE_CONTRAT } from "./TableauDesScores";
import { UnContrat } from "./UnContrat";
import { Lanceur } from "./Lanceur";
import { CHIFFRES_DU_BURMA } from "../arbitrage/chiffre";

const ColonneJoueur = ({
  largeur,
  joueur,
  score,
  estLeLanceur,
  chiffreCourant
}) => (
  <View style={{ width: largeur }}>
    <View style={[{ height: 40 }, Styles.bordureBasse, Styles.bordureGauche]}>
      <Joueur nom={joueur} />
    </View>

    {avecLesContratsPasEncoreJoues(score)
      .slice(1)
      .map((contrat, index) => (
        <View
          key={contrat}
          style={[
            Styles.bordureBasse,
            Styles.bordureGauche,
            { height: HAUTEUR_DE_CONTRAT }
          ]}
        >
          {estLeLanceur && contrat.contrat === chiffreCourant ? (
            <Lanceur />
          ) : (
            <UnContrat
              points={contrat.points}
              pointsPrecedents={
                avecLesContratsPasEncoreJoues(score)[index].points
              }
            />
          )}
        </View>
      ))}

    <View
      style={[
        Styles.bordureHaute,
        Styles.bordureBasse,
        Styles.bordureGauche,
        { height: HAUTEUR_DE_CONTRAT, borderTopWidth: 3 }
      ]}
    >
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={[Textes.titre, { fontSize: 19, textAlign: "center" }]}>
          {score[score.length - 1].points}
        </Text>
      </View>
    </View>
  </View>
);

ColonneJoueur.propTypes = {
  largeur: PropTypes.string.isRequired,
  joueur: PropTypes.string.isRequired,
  score: PropTypes.array.isRequired,
  estLeLanceur: PropTypes.bool.isRequired,
  chiffreCourant: PropTypes.string.isRequired
};

function avecLesContratsPasEncoreJoues(contratsDejaJoues) {
  const contratDepart = 1;
  return [
    ...contratsDejaJoues,
    ...CHIFFRES_DU_BURMA.slice(contratsDejaJoues.length - contratDepart).map(
      contratRestant => ({
        contrat: contratRestant,
        points: undefined
      })
    )
  ];
}

export default ColonneJoueur;
export { avecLesContratsPasEncoreJoues };
