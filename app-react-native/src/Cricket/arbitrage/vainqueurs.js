export function vainqueurs(scores) {
  const toutFerme = extraireCeuxQuiOntToutFerme(scores);

  const pasDeVainqueur = [];

  switch (toutFerme.length) {
    case 0:
      return pasDeVainqueur;

    case 1:
      const fermeEtPlusPetitePenalite =
        toutFerme[0].penalite === plusPetitePenalite(scores);

      if (fermeEtPlusPetitePenalite) return [toutFerme[0].joueur];

      return pasDeVainqueur;

    default:
      return extraireLesMoinsPenalises(scores).map(s => s.joueur);
  }
}

function extraireCeuxQuiOntToutFerme(scores) {
  const lesChiffresDeLaCibleSontFermes = cible =>
    Object.keys(cible).every(chiffre => cible[chiffre].ferme);

  const scoreAvecCibleFermee = score =>
    lesChiffresDeLaCibleSontFermes(score.cible);

  return scores.filter(scoreAvecCibleFermee);
}

const plusPetitePenalite = scores => Math.min(...scores.map(s => s.penalite));

function extraireLesMoinsPenalises(scores) {
  const penaliteMinimale = plusPetitePenalite(scores);

  const scoreAvecLaPlusPetitePenalite = score =>
    score.penalite === penaliteMinimale;

  return scores.filter(scoreAvecLaPlusPetitePenalite);
}
