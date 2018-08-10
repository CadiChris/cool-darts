import TableauDesScores from "./TableauDesScores";
import { connect } from "react-redux";
import React from "react";

const mapStateToProps = state => ({
  scores: state.burma.scores,
  lanceur: state.burma.lanceur,
  chiffreCourant: state.burma.chiffreCourant
});

export default connect(mapStateToProps)(TableauDesScores);
