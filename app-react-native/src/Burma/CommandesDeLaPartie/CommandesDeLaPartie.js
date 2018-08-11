import React from "react";
import PropTypes from "prop-types";
import ContratChiffre from "./Contrats/ContratChiffre";
import ContratDouble from "./Contrats/ContratDouble";

const CommandesDeLaPartie = ({
  chiffreCourant,
  lanceur,
  onLancerSurChiffre,
  onLancerSurDouble,
  onLancerSurBull
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
    case "BULL":
    default:
      return (
        <ContratChiffre
          {...reRenderAuChangement}
          chiffreCourant={chiffreCourant}
          nombreDeTouchesMax={chiffreCourant === "BULL" ? 6 : 9}
          lanceur={lanceur}
          onLancer={
            chiffreCourant === "BULL" ? onLancerSurBull : onLancerSurChiffre
          }
        />
      );
  }
};

CommandesDeLaPartie.propTypes = {
  lanceur: PropTypes.string,
  chiffreCourant: PropTypes.string,
  onLancerSurChiffre: PropTypes.func.isRequired,
  onLancerSurDouble: PropTypes.func.isRequired,
  onLancerSurBull: PropTypes.func.isRequired
};

export default CommandesDeLaPartie;
