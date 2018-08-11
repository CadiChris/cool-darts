import React, { Component } from "react";
import PropTypes from "prop-types";
import ContratChiffre from "./Contrats/ContratChiffre";
import ContratDouble from "./Contrats/ContratDouble";

class CommandesDeLaPartie extends Component {
  render() {
    const { chiffreCourant, lanceur } = this.props;

    switch (chiffreCourant) {
      case "DOUBLE":
        return <ContratDouble lanceur={lanceur} />;
      default:
        return <ContratChiffre {...this.props} />;
    }
  }
}

CommandesDeLaPartie.propTypes = {
  lanceur: PropTypes.string,
  chiffreCourant: PropTypes.string,
  onLancer: PropTypes.func
};

export default CommandesDeLaPartie;
