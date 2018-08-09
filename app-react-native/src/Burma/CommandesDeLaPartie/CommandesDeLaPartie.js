import React, { Component } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
import { Boutons, Textes } from "../../styles";
import Button from "apsl-react-native-button";
import TexteApparaissant from "../../Technique/TexteApparaissant";

class CommandesDeLaPartie extends Component {
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
    return (
      <View>
        <Text style={[Textes.basique, { fontSize: 16, textAlign: "center" }]}>
          Combien de {chiffreCourant} a fait {lanceur} ?
        </Text>

        <View
          style={{
            height: 40,
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <View>
            <Button
              style={[Boutons.deCommande, { paddingHorizontal: 20 }]}
              onPress={() => this.lancer(0)}
            >
              <Icon
                name="ban"
                size={20}
                color="white"
                style={{ marginRight: 10 }}
              />
              <Text style={[Textes.light, { fontSize: 20 }]}>Aucun</Text>
            </Button>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableHighlight
              onPress={() => this.toucher(-1)}
              disabled={touches === 1}
            >
              <Icon
                name="minus"
                size={20}
                color="white"
                style={{ marginRight: 20 }}
              />
            </TouchableHighlight>
            <Button
              style={[Boutons.deCommande, { paddingHorizontal: 20 }]}
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
              disabled={touches === 9}
            >
              <Icon
                name="plus"
                size={20}
                color="white"
                style={{ marginLeft: 20 }}
              />
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

CommandesDeLaPartie.propTypes = {
  lanceur: PropTypes.string.isRequired,
  chiffreCourant: PropTypes.string.isRequired,
  onLancer: PropTypes.func.isRequired
};

export default CommandesDeLaPartie;
