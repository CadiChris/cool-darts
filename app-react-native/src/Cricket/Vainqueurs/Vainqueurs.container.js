import React from "react";
import { connect } from "react-redux";
import { nouvellePartie } from "../Cricket.actions";
import Vainqueurs from "./Vainqueurs";

class VainqueursContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Vainqueurs {...this.props} />;
  }
}

const mapStateToProps = state => ({
  vainqueurs: state.cricket.actuel.vainqueurs
});

const mapDispatchToProps = dispatch => ({
  declencherNouvellePartie: () => dispatch(nouvellePartie())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VainqueursContainer);
