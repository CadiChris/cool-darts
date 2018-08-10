import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TableauDesScores from "./TableauDesScores/TableauDesScores.container";
import { demarrerPartie } from "./actions";

class Cricket extends Component {
  componentDidMount() {
    const { dispatch, joueurs } = this.props;
    dispatch(demarrerPartie(joueurs));
  }

  render() {
    return <TableauDesScores />;
  }
}

Cricket.propTypes = {
  joueurs: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  joueurs: state.inscriptionDesJoueurs.inscrits
});

export default connect(mapStateToProps)(Cricket);
