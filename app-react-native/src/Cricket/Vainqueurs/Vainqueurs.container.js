import React from "react";
import { connect } from "react-redux";
import { nouvellePartie } from "../actions";
import Vainqueurs from "./Vainqueurs";

const mapStateToProps = state => ({
  vainqueurs: state.cricket.actuel.vainqueurs
});

const mapDispatchToProps = dispatch => ({
  declencherNouvellePartie: () => dispatch(nouvellePartie())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Vainqueurs);
