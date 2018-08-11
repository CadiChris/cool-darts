import TableauDesScores from "./TableauDesScores";
import { connect } from "react-redux";
import React from "react";

const mapStateToProps = state => ({
  scores: state.burma.actuel.scores,
  lanceur: state.burma.actuel.lanceur,
  chiffreCourant: state.burma.actuel.chiffreCourant
});

export default connect(mapStateToProps)(TableauDesScores);
