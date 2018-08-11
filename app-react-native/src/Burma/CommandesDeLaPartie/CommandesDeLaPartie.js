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
  const reRenderAuChangement = { key: `${lanceur}-${chiffreCourant}` };

  switch (chiffreCourant) {
    case "DOUBLE":
      return (
        <ContratDouble
          {...reRenderAuChangement}
          lanceur={lanceur}
          onLancer={onLancerSurDouble}
        />
      );
    default:
      return (
        <ContratChiffre
          {...reRenderAuChangement}
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
