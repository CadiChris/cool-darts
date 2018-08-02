import React from "react";
import { connect } from "react-redux";
import { nouvellePartie } from "../actions";
import CommandesDeLaPartie from "./CommandesDeLaPartie";

const mapStateToProps = state => ({
  aucunPrecedent: state.cricket.precedents.length === 1
});

const mapDispatchToProps = dispatch => ({
  declencherNouvellePartie: () => dispatch(nouvellePartie()),
  declencherUndo: () => dispatch({ type: "UNDO" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommandesDeLaPartie);
