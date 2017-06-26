export function vainqueurs(scores) {
  const scoresAyantToutFerme = extraireCeuxQuiOntToutFerme(scores)

  return scoresAyantToutFerme.length <= 1
    ? scoresAyantToutFerme.map(s => s.joueur)
    : extraireLesMoinsPenalises(scores).map(s => s.joueur)
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
