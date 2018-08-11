import CommandesDeLaPartie from "./CommandesDeLaPartie";
import { connect } from "react-redux";
import React from "react";
import { voleeSurBull, voleeSurChiffre, voleeSurDouble } from "../actions";

const mapStateToProps = state => ({
  lanceur: state.burma.actuel.lanceur,
  chiffreCourant: state.burma.actuel.chiffreCourant
});

const mapDispatchToProps = dispatch => ({
  onLancerSurChiffre: (lanceur, chiffreCourant, touches) =>
    dispatch(voleeSurChiffre(lanceur, chiffreCourant, touches)),
  onLancerSurDouble: (lanceur, chiffresTouches) =>
    dispatch(voleeSurDouble(lanceur, chiffresTouches)),
  onLancerSurBull: (lanceur, _, touches) =>
    dispatch(voleeSurBull(lanceur, touches))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommandesDeLaPartie);
