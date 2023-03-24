import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import Animated, { FadeInDown, SlideOutRight } from "react-native-reanimated";
import { useInscription } from "../../redux";
import { FlecheBas } from "../../../assets/svgs/FlecheBas.svg.js";
import { FlecheHaut } from "../../../assets/svgs/FlecheHaut.svg.js";
import { Croix } from "../../../assets/svgs/Croix.svg.js";
import { desinscrireJoueur, reordonnerJoueur } from "../domaine/actions";
import { PastilleJoueur } from "../../Kit/Pastille";
import { InscriptionOuverte } from "./InscriptionOuverte";
import { $$spring, Inscrit } from "./style";

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
  const baisser = () => dispatch(reordonnerJoueur(position, +1));
  const remonter = () => dispatch(reordonnerJoueur(position, -1));
  const desinscrire = () => dispatch(desinscrireJoueur(nom));

  return (
    <Animated.View
      style={$.inscrit.ligne}
      entering={FadeInDown}
      exiting={SlideOutRight}
      layout={$$spring}
    >
      <View style={$.inscrit.pseudo}>
        <PastilleJoueur joueur={nom} />
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
    </Animated.View>
  );
}

const $ = StyleSheet.create({
  principal: { marginTop: 10 },
  inscrit: Inscrit,
});
