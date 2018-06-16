import React from "react";
import { connect } from "react-redux";
import { nouvellePartie } from "./../Cricket.actions";
import CommandesDeLaPartie from "./CommandesDeLaPartie";

class CommandesDeLaPartieContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <CommandesDeLaPartie {...this.props} />;
  }
}

const mapStateToProps = state => ({
  aucunPrecedent:
    state.cricket.precedents[state.cricket.precedents.length - 1].phase ===
    "INSCRIPTION"
});

const mapDispatchToProps = dispatch => ({
  declencherNouvellePartie: () => dispatch(nouvellePartie()),
  declencherUndo: () => dispatch({ type: "UNDO" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommandesDeLaPartieContainer);
