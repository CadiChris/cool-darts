import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { useInscription, useInscriptionFn } from "../../redux";
import { FlecheBas } from "../../../assets/FlecheBas.svg.js";
import { FlecheHaut } from "../../../assets/FlecheHaut.svg.js";
import { Croix } from "../../../assets/Croix.svg.js";
import { desinscrireJoueur, reordonnerJoueur } from "../domaine/actions";
import { Pastille } from "../../Kit/Pastille";
import { InscriptionOuverte } from "./InscriptionOuverte";
import { Inscrit } from "./style";
import { couleurDuJoueur } from "../domaine/reducer";

export const FormulaireInscription = () => {
  const NB_JOUEURS_MAX = 6;
  const inscrits = useInscription("inscrits");

  return (
    <View style={[$.principal]}>
      {inscrits.map((it, i) => (
        <UnInscrit
          key={it}
          nom={it}
          position={i}
          estPremier={i === 0}
          estDernier={i === inscrits.length - 1}
        />
      ))}
      {inscrits.length < NB_JOUEURS_MAX && <InscriptionOuverte />}
    </View>
  );
};

function UnInscrit({ nom, position, estPremier, estDernier }) {
  const dispatch = useDispatch();
  const couleur = useInscriptionFn(couleurDuJoueur, nom);
  const baisser = () => dispatch(reordonnerJoueur(position, +1));
  const remonter = () => dispatch(reordonnerJoueur(position, -1));
  const desinscrire = () => dispatch(desinscrireJoueur(nom));

  return (
    <View style={$.inscrit.ligne}>
      <View style={$.inscrit.pseudo}>
        <Pastille lettre={nom.charAt(0)} couleur={couleur} />
        <Text style={$.inscrit.texte}>{nom}</Text>
      </View>
      <View style={$.inscrit.commandes}>
        {!estPremier && (
          <TouchableOpacity
            onPressIn={remonter}
            style={[$.inscrit.actions.uneAction, $.inscrit.actions.fleche]}
          >
            <FlecheHaut width={12} height={14} />
          </TouchableOpacity>
        )}
        {!estDernier && (
          <TouchableOpacity
            onPressIn={baisser}
            style={[$.inscrit.actions.uneAction, $.inscrit.actions.fleche]}
          >
            <View>
              <FlecheBas width={12} height={14} />
            </View>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={desinscrire}
          style={[$.inscrit.actions.uneAction, $.inscrit.actions.croix]}
        >
          <View>
            <Croix width={12} height={12} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const $ = StyleSheet.create({
  principal: { marginTop: 10 },
  inscrit: Inscrit,
});
