import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { connect } from "react-redux";
import { demarrerPartie } from "./actions";
import TableauDesScores from "./TableauDesScores/TableauDesScores.container";
import CommandesDeLaPartie from "./CommandesDeLaPartie/CommandesDeLaPartie.container";

class Burma extends Component {
  componentDidMount() {
    const { dispatch, joueurs } = this.props;
    dispatch(demarrerPartie(joueurs));
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TableauDesScores />
        <CommandesDeLaPartie />
      </View>
    );
  }
}

Burma.propTypes = {
  joueurs: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  joueurs: state.inscriptionDesJoueurs.inscrits
});

export default connect(mapStateToProps)(Burma);
