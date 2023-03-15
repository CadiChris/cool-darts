import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import i18n from "i18n-js";
import { Inscrit } from "./style";
import { Pastille } from "../../Kit/Pastille";
import { inscrireJoueur } from "../domaine/actions";
import { couleurDispo } from "../domaine/reducer";
import { useInscriptionFn } from "../../redux";

export function InscriptionOuverte() {
  const [pseudo, setPseudo] = useState("");
  const dispatch = useDispatch();

  return (
    <View style={[$.inscrit.ligne]}>
      <View style={$.inscrit.pseudo}>
        <Pastille
          lettre={pseudo?.charAt(0)}
          couleur={useInscriptionFn(couleurDispo)}
        />
        <TextInput
          placeholder={i18n.t("inscription.placeholder")}
          placeholderTextColor="#A6B1C9"
          onChangeText={(t) => setPseudo(t)}
          onSubmitEditing={() => {
            dispatch(inscrireJoueur(pseudo));
            setPseudo("");
          }}
          style={[$.inscrit.texte, $.nouvelInscrit]}
          blurOnSubmit={false}
        >
          {pseudo}
        </TextInput>
      </View>
    </View>
  );
}

const $ = StyleSheet.create({
  inscrit: Inscrit,
  nouvelInscrit: { color: "white", flex: 1 },
});
