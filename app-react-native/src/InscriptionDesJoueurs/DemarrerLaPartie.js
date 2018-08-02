import React from "react";
import PropTypes from "prop-types";
import { Boutons, Textes } from "../styles";
import Button from "apsl-react-native-button";
import LocalizedStrings from "react-native-localization";

const DemarrerLaPartie = ({ onPress, isDisabled }) => (
  <Button
    onPress={onPress}
    isDisabled={isDisabled}
    style={[
      Boutons.principal,
      { marginBottom: 10, marginHorizontal: 10, width: "90%" }
    ]}
    textStyle={Textes.bouton}
  >
    {textes.demarrer}
  </Button>
);

DemarrerLaPartie.propTypes = {
  onPress: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
};

const textes = new LocalizedStrings({
  en: {
    demarrer: "Play"
  },
  fr: {
    demarrer: "Démarrer"
  }
});

export default DemarrerLaPartie;
