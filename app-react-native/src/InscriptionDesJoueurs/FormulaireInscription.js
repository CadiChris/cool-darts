import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "apsl-react-native-button";
import { View, TextInput } from "react-native";
import { Boutons, Textes } from "../styles";
import LocalizedStrings from "react-native-localization";

class FormulaireInscription extends Component {
  state = {
    joueur: ""
  };

  render() {
    const { joueur } = this.state;
    const { onSubmit } = this.props;
    return (
      <View
        style={{
          flexDirection: "row"
        }}
      >
        <TextInput
          value={joueur}
          onChangeText={text => this.setState({ joueur: text })}
          style={[{ flexGrow: 1, color: "white", fontSize: 18 }, Textes.light]}
          underlineColorAndroid="transparent"
          placeholderTextColor="#FFF"
          placeholder={textes.joueur}
        />

        <Button
          onPress={() => {
            onSubmit(joueur);
            this.setState({ joueur: "" });
          }}
          style={[{ width: 80, alignSelf: "center" }, Boutons.secondaire]}
          textStyle={Textes.bouton}
          isDisabled={joueur === ""}
        >
          {textes.inscrire}
        </Button>
      </View>
    );
  }
}

FormulaireInscription.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

const textes = new LocalizedStrings({
  en: {
    joueur: "Player...",
    inscrire: "Add"
  },
  fr: {
    joueur: "Joueur...",
    inscrire: "Inscrire"
  }
});

export default FormulaireInscription;
