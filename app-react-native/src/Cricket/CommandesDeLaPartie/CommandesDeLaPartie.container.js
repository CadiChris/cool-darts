import React from "react";
import { connect } from "react-redux";
import CommandesDeLaPartie from "./CommandesDeLaPartie";
import { undo } from "../../undo/undoable";

const mapStateToProps = state => ({
  aucunPrecedent: state.cricket.precedents.length === 1
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onQuitterLaPartie: () => ownProps.retourAuxInscriptions(),
  onUndo: () => dispatch(undo())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommandesDeLaPartie);
