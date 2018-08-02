import React from "react";
import { connect } from "react-redux";
import CommandesDeLaPartie from "./CommandesDeLaPartie";

const mapStateToProps = state => ({
  aucunPrecedent: state.cricket.precedents.length === 1
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onQuitterLaPartie: () => ownProps.retourAuxInscriptions(),
  onUndo: () => dispatch({ type: "UNDO" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommandesDeLaPartie);
