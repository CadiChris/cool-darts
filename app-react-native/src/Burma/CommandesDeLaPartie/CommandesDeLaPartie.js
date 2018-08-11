import React from "react";
import PropTypes from "prop-types";
import ContratChiffre from "./Contrats/ContratChiffre";
import ContratDoubleOuTriple from "./Contrats/ContratDoubleOuTriple";

const CommandesDeLaPartie = ({
  chiffreCourant,
  lanceur,
  onLancerSurChiffre,
  onLancerSurDouble,
  onLancerSurTriple
}) => {
  const reRenderAuChangement = { key: `${lanceur}-${chiffreCourant}` };

  switch (chiffreCourant) {
    case "DOUBLE":
    case "TRIPLE":
      return (
        <ContratDoubleOuTriple
          {...reRenderAuChangement}
          lanceur={lanceur}
          chiffreCourant={chiffreCourant}
          onLancerSurDouble={onLancerSurDouble}
          onLancerSurTriple={onLancerSurTriple}
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
  onLancerSurDouble: PropTypes.func.isRequired,
  onLancerSurTriple: PropTypes.func.isRequired
};

export default CommandesDeLaPartie;
