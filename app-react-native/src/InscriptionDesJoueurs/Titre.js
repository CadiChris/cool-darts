import React from "react";
import { Text } from "react-native";
import { Textes } from "../styles";
import FadeInView from "../Technique/FadeInView";

const Titre = () => (
  <FadeInView
    dureeDuFade={800}
    style={[{ height: 130, justifyContent: "center" }]}
  >
    <Text style={[Textes.titre, { textAlign: "center" }]}>Cool Darts</Text>
  </FadeInView>
);

export default Titre;
