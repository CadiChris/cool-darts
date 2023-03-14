import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { useInscription } from "../../redux";
import { Couleurs } from "../../styles";
import { FlecheBas } from "../../../assets/FlecheBas.svg.js";
import { FlecheHaut } from "../../../assets/FlecheHaut.svg.js";
import { Croix } from "../../../assets/Croix.svg.js";
import { desinscrireJoueur, reordonnerJoueur } from "../domaine/actions";
import { Pastille } from "../../Kit/Pastille";

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
    <View style={$.inscrit.ligne}>
      <View style={$.inscrit.pseudo}>
        <Pastille lettre={nom.charAt(0)} index={position} />
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
  inscrit: {
    ligne: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: Couleurs.sombreUn,
      marginVertical: 3,
      borderRadius: 6,
      paddingVertical: 8,
      paddingHorizontal: 10,
    },
    pseudo: { flexDirection: "row", alignItems: "center", columnGap: 10 },
    texte: { fontSize: 18, color: Couleurs.blanc, fontWeight: "bold" },
    commandes: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    actions: {
      uneAction: {
        alignItems: "center",
        justifyContent: "center",
        width: 30,
        height: 24,
      },
      fleche: {
        borderRightWidth: 1,
        borderRightColor: Couleurs.sombreTrois,
      },
      croix: { width: "auto", paddingLeft: 9 },
    },
  },
});
