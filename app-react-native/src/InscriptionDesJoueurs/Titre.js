import React from "react";
import { Text } from "react-native";
import { Textes } from "../styles";
import FadeInView from "../Technique/FadeInView";

const Titre = () => (
  <FadeInView dureeDuFade={800}>
    <Text
      style={[
        Textes.titre,
        { textAlign: "center", marginTop: 30, marginBottom: 50 }
      ]}
    >
      Cut-Throat Cricket
    </Text>
  </FadeInView>
);

export default Titre;
