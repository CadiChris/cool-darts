import React, { Component } from "react";
import PropTypes from "prop-types";
import ContratChiffre from "./Contrats/ContratChiffre";
import ContratDouble from "./Contrats/ContratDouble";

class CommandesDeLaPartie extends Component {
  render() {
    const {
      chiffreCourant,
      lanceur,
      onLancerSurChiffre,
      onLancerSurDouble
    } = this.props;

    switch (chiffreCourant) {
      case "DOUBLE":
        return <ContratDouble lanceur={lanceur} onLancer={onLancerSurDouble} />;
      default:
        return (
          <ContratChiffre
            chiffreCourant={chiffreCourant}
            lanceur={lanceur}
            onLancer={onLancerSurChiffre}
          />
        );
    }
  }
}

CommandesDeLaPartie.propTypes = {
  lanceur: PropTypes.string,
  chiffreCourant: PropTypes.string,
  onLancerSurChiffre: PropTypes.func.isRequired,
  onLancerSurDouble: PropTypes.func.isRequired
};

export default CommandesDeLaPartie;
