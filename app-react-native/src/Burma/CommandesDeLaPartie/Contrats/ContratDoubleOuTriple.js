import React, { Component } from "react";
import PropTypes from "prop-types";
import { TextInput, View } from "react-native";
import Button from "apsl-react-native-button";
import LocalizedStrings from "react-native-localization";
import Icon from "react-native-vector-icons/FontAwesome";
import { scale, verticalScale } from "react-native-size-matters";
import { Boutons, FontSizes, Textes } from "../../../styles";
import AucuneTouche from "./AucuneTouche";

class ContratDoubleOuTriple extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chiffresTouches: ["", "", ""]
    };

    this.onLancer = {
      DOUBLE: props.onLancerSurDouble,
      TRIPLE: props.onLancerSurTriple
    };
  }

  toucher(chiffre, index) {
    const nextChiffres = [...this.state.chiffresTouches];
    nextChiffres[index] = chiffre;
    this.setState({ chiffresTouches: nextChiffres });
  }

  lancer() {
    const { lanceur, chiffreCourant } = this.props;
    this.onLancer[chiffreCourant](lanceur, this.chiffresNonVides());
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
    const { lanceur, chiffreCourant } = this.props;
    const { chiffresTouches } = this.state;

    return (
      <View
        style={{
          height: verticalScale(80),
          marginTop: verticalScale(20),
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <AucuneTouche
          onPress={() => this.onLancer[chiffreCourant](lanceur, [])}
        />

        <View
          style={{
            flexDirection: "row",
            height: verticalScale(40)
          }}
        >
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
                {
                  width: 40,
                  color: "white",
                  fontSize: FontSizes.standard,
                  height: verticalScale(50)
                },
                Textes.light
              ]}
              underlineColorAndroid="transparent"
              placeholderTextColor="rgba(255, 255, 255, 0.7)"
              placeholder={`#${index + 1}`}
            />
          ))}
          <Button
            style={[
              Boutons.deCommande,
              { paddingHorizontal: scale(24), marginLeft: 6 }
            ]}
            onPress={() => this.lancer()}
            isDisabled={this.chiffresNonVides().length === 0}
          >
            <Icon name="check" size={20} color="white" />
          </Button>
        </View>
      </View>
    );
  }
}

ContratDoubleOuTriple.propTypes = {
  lanceur: PropTypes.string,
  chiffreCourant: PropTypes.string,
  onLancerSurDouble: PropTypes.func.isRequired,
  onLancerSurTriple: PropTypes.func.isRequired
};

const textes = new LocalizedStrings({
  en: {
    enTete: "Which {0} did {1} hit?"
  },
  fr: {
    enTete: "Quels {0} a touché {1} ?"
  }
});

export default ContratDoubleOuTriple;
