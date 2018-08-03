import { View } from "react-native";
import { Styles } from "../../styles";
import { Joueur } from "./Joueur";
import PropTypes from "prop-types";
import React from "react";

export const EnTete = ({ joueurs }) => (
  <View style={[{ height: 40, paddingLeft: 70 }, Styles.bordureBasse]}>
    <View
      style={{
        flex: 1,
        flexDirection: "row"
      }}
    >
      {joueurs.map(nom => (
        <View
          key={nom}
          style={[Styles.bordureGauche, { width: `${100 / joueurs.length}%` }]}
        >
          <Joueur nom={nom} />
        </View>
      ))}
    </View>
  </View>
);

EnTete.propTypes = {
  joueurs: PropTypes.array.isRequired
};
