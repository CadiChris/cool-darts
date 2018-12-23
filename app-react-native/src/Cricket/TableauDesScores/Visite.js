import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import { scale } from "react-native-size-matters";
import Button from "apsl-react-native-button";
import { Boutons, FontSizes, Textes } from "../../styles";
import Icon from "react-native-vector-icons/FontAwesome";

const Visite = ({ joueur, chiffres, onValider, onAnnuler }) => (
  <View>
    <Text
      style={[
        { textAlign: "center", fontSize: FontSizes.standard },
        Textes.basique
      ]}
    >
      {joueur}
    </Text>
    <View style={{ display: "flex", flexDirection: "row" }}>
      <Button
        onPress={onAnnuler}
        style={[Boutons.deCommande, { width: scale(40) }]}
      >
        <Icon name="trash" size={16} color="white" />
      </Button>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-evenly"
        }}
      >
        {grouper(chiffres).map(([chiffre, compte]) => (
          <View key={chiffre}>
            <Text style={[Textes.basique]}>
              <Text style={[Textes.titre, { fontSize: FontSizes.grand }]}>
                {chiffre === "25" ? "Bull" : chiffre}
              </Text>{" "}
              x<Text style={{ fontSize: FontSizes.standard }}>{compte}</Text>
            </Text>
          </View>
        ))}
      </View>

      <Button
        onPress={onValider}
        style={[Boutons.deCommande, { width: scale(50) }]}
      >
        <Icon name="check" size={36} color="white" />
      </Button>
    </View>
  </View>
);

Visite.propTypes = {
  joueur: PropTypes.string.isRequired,
  chiffres: PropTypes.array.isRequired,
  onValider: PropTypes.func.isRequired,
  onAnnuler: PropTypes.func.isRequired
};

export default Visite;

export const grouper = chiffres =>
  Object.entries(
    chiffres.reduce(
      (groupes, chiffre) => ({
        ...groupes,
        [chiffre]: (groupes[chiffre] || 0) + 1
      }),
      {}
    )
  );
