import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import KeepAwake from "react-native-keep-awake";
import TableauDesScores from "./TableauDesScores/TableauDesScores.container";
import InscriptionDesJoueurs from "./InscriptionDesJoueurs/InscriptionDesJoueurs.container";
import CommandesDeLaPartie from "./CommandesDeLaPartie/CommandesDeLaPartie.container";
import { Styles } from "./styles";

class Cricket extends Component {
  render() {
    const { phase } = this.props;

    const afficherLesCommandes = phase !== "INSCRIPTION";

    return (
      <View style={Styles.container}>
        {phase === "INSCRIPTION" ? (
          <InscriptionDesJoueurs />
        ) : (
          <TableauDesScores />
        )}
        {afficherLesCommandes && <CommandesDeLaPartie />}
        <KeepAwake />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  phase: state.cricket.actuel.phase
});

export default connect(mapStateToProps)(Cricket);
