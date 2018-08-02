import React, { Component } from "react";
import { View, TextInput, Text, Platform } from "react-native";
import LocalizedStrings from "react-native-localization";
import Button from "apsl-react-native-button";
import Portrait from "../Technique/Portrait";
import FadeInView from "../Technique/FadeInView";
import ViewQuiDecale from "../Technique/ViewQuiDecale";
import TexteApparaissant from "../Technique/TexteApparaissant";
import { Styles, Textes, Boutons } from "../Cricket/styles";

const unPeuTransparent = Platform.select({
  ios: { opacity: 0.5 },
  android: { color: "#8498AB" }
});

class InscriptionDesJoueurs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joueur: ""
    };
  }

  render() {
    const {
      laPartiePeutDemarrer,
      joueurs,
      inscriptionEstPossible,
      onInscrireJoueur,
      onDemarrerLaPartie
    } = this.props;

    const { joueur } = this.state;

    return (
      <Portrait>
        <FadeInView
          style={[
            Styles.contenuAuMilieu,
            { paddingHorizontal: 10, justifyContent: "space-between" }
          ]}
          dureeDuFade={450}
        >
          <Text style={[Textes.titre, { marginTop: 50 }]}>
            Cut-Throat Cricket
          </Text>

          <ViewQuiDecale
            dureeDuDecalage={230}
            coteDeDepart="right"
            style={[{ flex: 1, flexDirection: "row", paddingHorizontal: 50 }]}
          >
            <TextInput
              value={joueur}
              onChangeText={text => this.setState({ joueur: text })}
              style={[{ flexGrow: 1, color: "white" }, Textes.light]}
              underlineColorAndroid="transparent"
              placeholderTextColor="#FFF"
              placeholder={textes.joueur}
            />

            <Button
              onPress={() => {
                onInscrireJoueur(joueur);
                this.setState({ joueur: "" });
              }}
              isDisabled={!inscriptionEstPossible(joueur)}
              style={[{ width: 80, alignSelf: "center" }, Boutons.secondaire]}
              textStyle={Textes.bouton}
            >
              {textes.inscrire}
            </Button>
          </ViewQuiDecale>

          <View style={{ flex: 1 }}>
            {joueurs.map((nom, index) => (
              <TexteApparaissant
                key={index}
                style={[Textes.basique, Textes.mav]}
              >
                <Text style={[Textes.light, { ...unPeuTransparent }]}>
                  #{index + 1}
                </Text>
                {`  ${nom}`}
              </TexteApparaissant>
            ))}
          </View>

          <Button
            onPress={onDemarrerLaPartie}
            isDisabled={!laPartiePeutDemarrer}
            style={[
              Boutons.principal,
              { marginBottom: 10, marginHorizontal: 10 }
            ]}
            textStyle={Textes.bouton}
          >
            {textes.demarrer}
          </Button>
        </FadeInView>
      </Portrait>
    );
  }
}

const textes = new LocalizedStrings({
  en: {
    joueur: "Player...",
    inscrire: "Add",
    demarrer: "Play"
  },
  fr: {
    joueur: "Joueur...",
    inscrire: "Inscrire",
    demarrer: "Démarrer"
  }
});

export default InscriptionDesJoueurs;
