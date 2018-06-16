import React from "react";
import { connect } from "react-redux";
import { lancerFlechette } from "../Cricket.actions";
import LigneDeScore from "./LigneDeScore";

const mapStateToProps = (state, ownProps) => ({
  score: ownProps.score
});

const mapDispatchToProps = dispatch => ({
  onLancerDansSimple: (joueur, chiffre) => {
    const lancerSimple = 1;
    dispatch(lancerFlechette(joueur, chiffre, lancerSimple));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LigneDeScore);
