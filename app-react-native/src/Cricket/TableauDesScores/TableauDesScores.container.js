import React from "react";
import { connect } from "react-redux";
import TableauDesScores from "./TableauDesScores";

class TableauDesScoresContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <TableauDesScores {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    scores: [...state.cricket.actuel.scores]
  };
}

export default connect(mapStateToProps)(TableauDesScoresContainer);
