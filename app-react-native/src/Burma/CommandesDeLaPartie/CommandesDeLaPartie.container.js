import CommandesDeLaPartie from "./CommandesDeLaPartie";
import { connect } from "react-redux";
import React from "react";
import { voleeSurChiffre } from "../actions";

const mapStateToProps = state => ({
  lanceur: state.burma.lanceur,
  chiffreCourant: state.burma.chiffreCourant
});

const mapDispatchToProps = dispatch => ({
  onLancer: (lanceur, chiffreCourant, touches) =>
    dispatch(voleeSurChiffre(lanceur, chiffreCourant, touches))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommandesDeLaPartie);
