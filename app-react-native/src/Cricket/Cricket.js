import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import KeepAwake from "react-native-keep-awake";
import TableauDesScores from "./TableauDesScores/TableauDesScores.container";
import InscriptionDesJoueurs from "./InscriptionDesJoueurs/InscriptionDesJoueurs.container";
import CommandesDeLaPartie from "./CommandesDeLaPartie/CommandesDeLaPartie.container";
import { Styles } from "./styles";

function Cricket({ inscriptionEnCours }) {
  return (
    <View style={Styles.container}>
      {inscriptionEnCours ? (
        <InscriptionDesJoueurs />
      ) : (
        <View style={{ flex: 1 }}>
          <TableauDesScores />
          <CommandesDeLaPartie />
        </View>
      )}
      <KeepAwake />
    </View>
  );
}

const mapStateToProps = state => ({
  inscriptionEnCours: state.cricket.actuel.phase === "INSCRIPTION"
});

export default connect(mapStateToProps)(Cricket);
