import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { useInscription } from "../../redux";
import { Couleurs } from "../../styles";
import { FlecheBas } from "../../../assets/FlecheBas.svg.js";
import { FlecheHaut } from "../../../assets/FlecheHaut.svg.js";
import { Croix } from "../../../assets/Croix.svg.js";
import { desinscrireJoueur, reordonnerJoueur } from "../domaine/actions";

export const FormulaireInscription = () => {
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
    </View>
  );
};

function UnInscrit({ nom, position, estPremier, estDernier }) {
  const dispatch = useDispatch();
  const baisser = () => dispatch(reordonnerJoueur(position, +1));
  const remonter = () => dispatch(reordonnerJoueur(position, -1));
  const desinscrire = () => dispatch(desinscrireJoueur(nom));

  return (
    <View style={$.inscrit.boite}>
      <Text style={$.inscrit.texte}>{nom}</Text>
      <View style={$.inscrit.commandes}>
        {!estPremier && (
          <TouchableOpacity onPress={remonter}>
            <View style={[$.inscrit.actions.fleche]}>
              <FlecheHaut width={12} height={14} />
            </View>
          </TouchableOpacity>
        )}
        {!estDernier && (
          <TouchableOpacity onPress={baisser}>
            <View style={[$.inscrit.actions.fleche]}>
              <FlecheBas
                width={12}
                height={14}
                transform={[{ translateY: 2 }]}
              />
            </View>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={desinscrire}>
          <View style={[$.inscrit.actions.croix]}>
            <Croix width={12} height={12} transform={[{ translateY: 1 }]} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const $ = StyleSheet.create({
  principal: { marginTop: 10 },
  inscrit: {
    boite: {
      height: 40,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: Couleurs.sombreUn,
      marginVertical: 3,
      borderRadius: 6,
      paddingVertical: 8,
      paddingHorizontal: 10,
    },
    texte: { fontSize: 18, color: Couleurs.blanc, fontWeight: "bold" },
    commandes: {
      flexDirection: "row",
      alignItems: "center",
    },
    actions: {
      fleche: {
        justifyContent: "center",
        height: 20,
        paddingHorizontal: 10,
        borderRightWidth: 1,
        borderRightColor: Couleurs.sombreTrois,
      },
      croix: {
        paddingLeft: 10,
        paddingRight: 2,
      },
    },
  },
});
