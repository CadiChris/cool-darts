import React from "react";
import PropTypes from "prop-types";
import ContratChiffre from "./Contrats/ContratChiffre";
import ContratDouble from "./Contrats/ContratDouble";

const CommandesDeLaPartie = ({
  chiffreCourant,
  lanceur,
  onLancerSurChiffre,
  onLancerSurDouble
}) => {
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
};

CommandesDeLaPartie.propTypes = {
  lanceur: PropTypes.string,
  chiffreCourant: PropTypes.string,
  onLancerSurChiffre: PropTypes.func.isRequired,
  onLancerSurDouble: PropTypes.func.isRequired
};

export default CommandesDeLaPartie;
