import React, { Component } from "react";
import PropTypes from "prop-types";
import ContratChiffre from "./Contrats/ContratChiffre";

class CommandesDeLaPartie extends Component {
  render() {
    return <ContratChiffre {...this.props} />;
  }
}

CommandesDeLaPartie.propTypes = {
  lanceur: PropTypes.string,
  chiffreCourant: PropTypes.string,
  onLancer: PropTypes.func
};

export default CommandesDeLaPartie;
