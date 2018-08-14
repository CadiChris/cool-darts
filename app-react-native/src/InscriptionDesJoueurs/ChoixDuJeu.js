import React from "react";
import { View, Text, Dimensions, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";
import SideSwipe from "react-native-sideswipe";
import Icon from "react-native-vector-icons/FontAwesome";
import { Textes } from "../styles";
import { elementPrecedent, elementSuivant } from "../Technique/tableau";

const ChoixDuJeu = ({ jeuxDisponibles, jeuChoisi, onChangementDeJeu }) => (
  <View style={{ flex: 1 }}>
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <TouchableHighlight
        style={{ paddingVertical: 20, paddingHorizontal: 10 }}
        onPress={() =>
          onChangementDeJeu(elementPrecedent(jeuChoisi, jeuxDisponibles))
        }
      >
        <Icon
          name="angle-double-left"
          size={30}
          style={{ color: "rgba(255,255,255,0.4)" }}
        />
      </TouchableHighlight>
      <SideSwipe
        data={jeuxDisponibles}
        itemWidth={Dimensions.get("window").width * 0.4}
        style={{ width: "50%", height: 50 }}
        index={jeuxDisponibles.indexOf(jeuChoisi)}
        onIndexChange={index => onChangementDeJeu(jeuxDisponibles[index])}
        renderItem={({ item: jeu }) => (
          <View
            style={{
              width: Dimensions.get("window").width * 0.4,
              justifyContent: "center"
            }}
          >
            <Text style={[Textes.basique, Textes.mav, { textAlign: "center" }]}>
              {jeu.charAt(0).toUpperCase() + jeu.slice(1)}
            </Text>
          </View>
        )}
      />
      <TouchableHighlight
        onPress={() => onChangementDeJeu("burma")}
        style={{ paddingVertical: 20, paddingHorizontal: 10 }}
      >
        <Icon
          name="angle-double-right"
          size={30}
          style={{ color: "rgba(255,255,255,0.4)" }}
          onPress={() =>
            onChangementDeJeu(elementSuivant(jeuChoisi, jeuxDisponibles))
          }
        />
      </TouchableHighlight>
    </View>
    <Text
      style={[
        Textes.light,
        { textAlign: "center", color: "rgba(255,255,255,0.4)", fontSize: 15 }
      ]}
    >
      {jeuxDisponibles.indexOf(jeuChoisi) + 1} / {jeuxDisponibles.length}
    </Text>
  </View>
);

ChoixDuJeu.propTypes = {
  jeuxDisponibles: PropTypes.array.isRequired,
  jeuChoisi: PropTypes.string.isRequired,
  onChangementDeJeu: PropTypes.func.isRequired
};

export default ChoixDuJeu;
