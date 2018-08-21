import React from "react";
import { Text } from "react-native";
import { verticalScale } from "react-native-size-matters";
import { Textes } from "../styles";
import FadeInView from "../Technique/FadeInView";

const Titre = () => (
  <FadeInView
    dureeDuFade={800}
    style={[{ height: verticalScale(130), justifyContent: "center" }]}
  >
    <Text style={[Textes.titre, { textAlign: "center" }]}>Cool Darts</Text>
  </FadeInView>
);

export default Titre;
