export function vainqueurs(scores) {
  const vainqueurs = extraireCeuxQuiOntToutFerme(scores)

  switch (vainqueurs.length) {
    case 0: return []
    case 1: return [vainqueurs[0].joueur]
    default: return extraireLesMoinsPenalises(scores).map(s => s.joueur)
  }
}

function extraireCeuxQuiOntToutFerme(scores) {
  const lesChiffresDeLaCibleSontFermes = (cible) => (
      Object.keys(cible).every(chiffre => cible[chiffre].ferme)
  )
  const scoreAvecCibleFermee = (score) => lesChiffresDeLaCibleSontFermes(score.cible)

  return scores.filter(scoreAvecCibleFermee)
}

function extraireLesMoinsPenalises(scores) {
  const plusPetitePenalite = Math.min(...scores.map(s => s.points))

  const scoreAvecLaPlusPetitePenalite = (score) => score.points === plusPetitePenalite

  return scores.filter(scoreAvecLaPlusPetitePenalite)
}
