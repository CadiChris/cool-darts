import React, { Component } from "react";
import PropTypes from "prop-types";
import { TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Boutons, Textes } from "../../../styles";
import EnTete from "./EnTete";
import AucuneTouche from "./AucuneTouche";
import Button from "apsl-react-native-button";

class ContratDouble extends Component {
  state = {
    chiffresTouches: ["", "", ""]
  };

  toucher(chiffre, index) {
    const nextChiffres = [...this.state.chiffresTouches];
    nextChiffres[index] = chiffre;
    this.setState({ chiffresTouches: nextChiffres });
  }

  lancer() {
    const { lanceur, onLancer } = this.props;
    onLancer(lanceur, this.chiffresNonVides());
  }

  chiffresNonVides() {
    const { chiffresTouches } = this.state;
    return chiffresTouches.filter(c => c !== "");
  }

  chiffreEstValide(chiffre) {
    const pasDeChiffre = chiffre === "";
    const chiffreConnu = 1 <= Number(chiffre) && Number(chiffre) <= 20;
    const bull = chiffre === "25";

    return pasDeChiffre || chiffreConnu || bull;
  }

  render() {
    const { lanceur, onLancer } = this.props;
    const { chiffresTouches } = this.state;
    return (
      <View>
        <EnTete>Quels DOUBLE a touché {lanceur} ?</EnTete>

        <View
          style={{
            height: 40,
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <AucuneTouche onPress={() => onLancer(lanceur, [])} />

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {chiffresTouches.map((chiffre, index) => (
              <TextInput
                key={index}
                value={chiffre}
                keyboardType="numeric"
                onChangeText={chiffre => {
                  if (!this.chiffreEstValide(chiffre)) return;
                  this.toucher(chiffre, index);
                }}
                style={[
                  { width: 40, color: "white", fontSize: 18 },
                  Textes.light
                ]}
                underlineColorAndroid="transparent"
                placeholderTextColor="rgba(255, 255, 255, 0.5)"
                placeholder={`#${index + 1}`}
              />
            ))}
            <Button
              style={[
                Boutons.deCommande,
                { paddingHorizontal: 20, marginLeft: 6 }
              ]}
              onPress={() => this.lancer()}
              isDisabled={this.chiffresNonVides().length === 0}
            >
              <Icon name="check" size={20} color="white" />
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

ContratDouble.propTypes = {
  lanceur: PropTypes.string,
  onLancer: PropTypes.func.isRequired
};

export default ContratDouble;
