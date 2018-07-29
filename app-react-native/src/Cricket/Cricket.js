import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import TableauDesScores from "./TableauDesScores/TableauDesScores.container";
import InscriptionDesJoueurs from "./InscriptionDesJoueurs/InscriptionDesJoueurs.container";
import CommandesDeLaPartie from "./CommandesDeLaPartie/CommandesDeLaPartie.container";
import Vainqueurs from "./Vainqueurs/Vainqueurs.container";
import { Styles } from "./styles";
import KeepAwake from "react-native-keep-awake";

class Cricket extends React.Component {
  render() {
    const { phase } = this.props;
    const ecrans = {
      INSCRIPTION: <InscriptionDesJoueurs />,
      EN_COURS: <TableauDesScores />,
      TERMINEE: <Vainqueurs />
    };

    const afficherLesCommandes = phase === "EN_COURS";

    return (
      <View style={Styles.container}>
        {ecrans[phase]}
        {afficherLesCommandes ? <CommandesDeLaPartie /> : null}
        <KeepAwake />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  phase: state.cricket.actuel.phase
});

export default connect(mapStateToProps)(Cricket);
