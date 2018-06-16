import React from "react";
import { connect } from "react-redux";
import TableauDesScores from "./TableauDesScores";

const mapStateToProps = state => ({
  scores: [...state.cricket.actuel.scores]
});

export default connect(mapStateToProps)(TableauDesScores);
