import React from "react";
import { connect } from "react-redux";
import TableauDesScores from "./TableauDesScores";
import { lancerFlechette } from "../../domaine/actions";

const mapStateToProps = state => ({
  scores: state.cricket.actuel.scores,
  vainqueurs: state.cricket.actuel.vainqueurs,
  actif: state.cricket.actuel.vainqueurs.length === 0
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
