import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { connect } from "react-redux";
import KeepAwake from "react-native-keep-awake";
import TableauDesScores from "./TableauDesScores/TableauDesScores.container";
import { demarrerCricket } from "./actions";
import Portrait from "../Technique/Portrait";

class Cricket extends Component {
  componentDidMount() {
    const { dispatch, joueurs } = this.props;
    dispatch(demarrerCricket(joueurs));
  }

  render() {
    return (
      <Portrait>
        <View style={{ flex: 1 }}>
          <TableauDesScores />
          <KeepAwake />
        </View>
      </Portrait>
    );
  }
}

Cricket.propTypes = {
  joueurs: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  joueurs: state.inscriptionDesJoueurs.inscrits
});

export default connect(mapStateToProps)(Cricket);
