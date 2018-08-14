import React, { Component } from "react";
import { TouchableHighlight, View } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
import Button from "apsl-react-native-button";
import LocalizedStrings from "react-native-localization";
import { Boutons, Textes } from "../../../styles";
import TexteApparaissant from "../../../Technique/TexteApparaissant";
import EnTete from "./EnTete";
import AucuneTouche from "./AucuneTouche";
import { BULL } from "../../arbitrage/chiffre";

class ContratChiffre extends Component {
  decalageDuTexte = 8;

  state = {
    touches: 1,
    decalageDuTexte: this.decalageDuTexte
  };

  toucher(delta) {
    const nextTouches = this.state.touches + delta;
    const nextDecalage =
      delta > 0 ? this.decalageDuTexte : -this.decalageDuTexte;

    this.setState({
      touches: nextTouches,
      decalageDuTexte: nextDecalage
    });
  }

  lancer(touches) {
    const { lanceur, chiffreCourant, onLancer } = this.props;
    onLancer(lanceur, chiffreCourant, touches);
  }

  render() {
    const { lanceur, chiffreCourant } = this.props;
    const { touches, decalageDuTexte } = this.state;
    const nombreDeTouchesMax = chiffreCourant === BULL ? 6 : 9;

    return (
      <View>
        <EnTete>
          {chiffreCourant &&
            lanceur &&
            textes.formatString(
              textes.enTete,
              chiffreCourant === BULL ? "BULL" : chiffreCourant,
              lanceur
            )}
        </EnTete>

        <View
          style={{
            height: 40,
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <AucuneTouche onPress={() => this.lancer(0)} />

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableHighlight
              onPress={() => this.toucher(-1)}
              disabled={touches === 1}
              style={{ paddingHorizontal: 20, paddingVertical: 10 }}
            >
              <Icon name="minus" size={20} color="white" />
            </TouchableHighlight>
            <Button
              style={[Boutons.deCommande, { paddingHorizontal: 40 }]}
              onPress={() => this.lancer(touches)}
            >
              <TexteApparaissant
                key={touches}
                departDuDecalage={decalageDuTexte}
                style={[Textes.titre, { fontSize: 30 }]}
              >
                {touches}
              </TexteApparaissant>
            </Button>
            <TouchableHighlight
              onPress={() => this.toucher(+1)}
              disabled={touches === nombreDeTouchesMax}
              style={{ paddingHorizontal: 20, paddingVertical: 10 }}
            >
              <Icon name="plus" size={20} color="white" />
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

ContratChiffre.propTypes = {
  lanceur: PropTypes.string,
  chiffreCourant: PropTypes.string,
  onLancer: PropTypes.func.isRequired
};

const textes = new LocalizedStrings({
  en: {
    enTete: "How many {0} did {1} hit?"
  },
  fr: {
    enTete: "Combien de {0} a fait {1} ?"
  }
});

export default ContratChiffre;
