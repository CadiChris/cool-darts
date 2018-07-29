import React from "react";
import { connect } from "react-redux";
import TableauDesScores from "./TableauDesScores";
import { lancerFlechette } from "../actions";

const mapStateToProps = state => ({
  scores: [...state.cricket.actuel.scores],
  vainqueurs: state.cricket.actuel.vainqueurs,
  actif: state.cricket.actuel.phase === "EN_COURS"
});

const mapDispatchToProps = dispatch => ({
  onLancerDansSimple: (joueur, chiffre) => {
    const uneTouche = 1;
    dispatch(lancerFlechette(joueur, chiffre, uneTouche));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableauDesScores);
