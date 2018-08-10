import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-native";
import Navigation from "./Navigation";
import { undo } from "../undo/undoable";

const mapStateToProps = state => ({
  aucunPrecedent: state.cricket.precedents.length === 1
});

const mapDispatchToProps = (dispatch, { history }) => ({
  onQuitterLaPartie: () => history.push("/inscription"),
  onUndo: () => dispatch(undo())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Navigation)
);
