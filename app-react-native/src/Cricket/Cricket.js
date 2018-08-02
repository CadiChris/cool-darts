import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { connect } from "react-redux";
import TableauDesScores from "./TableauDesScores/TableauDesScores.container";
import CommandesDeLaPartie from "./CommandesDeLaPartie/CommandesDeLaPartie.container";
import { demarrerPartie } from "./actions";

class Cricket extends Component {
  componentDidMount() {
    const { dispatch, joueurs } = this.props;
    dispatch(demarrerPartie(joueurs));
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flexGrow: 1 }}>
          <TableauDesScores />
        </View>
        <CommandesDeLaPartie />
      </View>
    );
  }
}

Cricket.propTypes = {
  joueurs: PropTypes.array.isRequired
};

export default connect()(Cricket);
