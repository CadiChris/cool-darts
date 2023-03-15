import React, { useEffect, useState } from "react";
import { Keyboard, StyleSheet, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import i18n from "i18n-js";
import { Inscrit } from "./style";
import { Pastille } from "../../Kit/Pastille";
import { inscrireJoueur } from "../domaine/actions";
import { couleurDispo } from "../domaine/reducer";
import { useInscriptionFn } from "../../redux";

export function InscriptionOuverte() {
  const [pseudo, setPseudo] = useState("");
  const [clavierVisible, setClavierVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const listenTo = (eventType, booleenClavier) =>
      Keyboard.addListener(eventType, () => setClavierVisible(booleenClavier));

    const ecouteClavierVisible = listenTo("keyboardDidShow", true);
    const ecouteClavierInvisible = listenTo("keyboardDidHide", false);

    return () => {
      ecouteClavierVisible.remove();
      ecouteClavierInvisible.remove();
    };
  }, []);

  return (
    <View style={[$.inscrit.ligne]}>
      <View style={$.inscrit.pseudo}>
        <Pastille
          lettre={pseudo?.charAt(0)}
          index={0}
          couleur={useInscriptionFn(couleurDispo)}
          style={{ transform: clavierVisible ? [{ translateY: -10 }] : [] }}
        />
        <TextInput
          placeholder={i18n.t("inscription.placeholder")}
          placeholderTextColor="#A6B1C9"
          onChangeText={(t) => setPseudo(t)}
          onSubmitEditing={() => {
            dispatch(inscrireJoueur(pseudo));
            setPseudo("");
          }}
          style={[
            $.inscrit.texte,
            $.nouvelInscrit,
            { paddingBottom: clavierVisible * 20 },
          ]}
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
