import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import LocalizedStrings from "react-native-localization";
import Vainqueur from "./Vainqueur";
import { Textes } from "../styles";

const Joueur = ({ estVainqueur, joueur, penalite }) => (
  <View style={{ paddingLeft: 10, justifyContent: "center" }}>
    {estVainqueur && (
      <View style={{ marginBottom: 17 }}>
        <Vainqueur taille={27} />
      </View>
    )}
    <Text style={[Textes.basique]}>{joueur}</Text>
    <View style={{ marginTop: 8 }}>
      <Text style={[Textes.light]}>{`${textes.penalite} ${penalite}`}</Text>
    </View>
  </View>
);

Joueur.propTypes = {
  estVainqueur: PropTypes.bool.isRequired,
  joueur: PropTypes.string.isRequired,
  penalite: PropTypes.number.isRequired
};

const textes = new LocalizedStrings({
  en: {
    penalite: "Penalty:"
  },
  fr: {
    penalite: "Pénalité :"
  }
});

export default Joueur;
