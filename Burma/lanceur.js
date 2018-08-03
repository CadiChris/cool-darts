const lanceurSuivant = (lanceurActuel, tousLesJoueurs) => {
  const nombreDeJoueurs = tousLesJoueurs.length;
  const indexDuLanceur = tousLesJoueurs.indexOf(lanceurActuel);
  const prochainLanceur =
    tousLesJoueurs[(indexDuLanceur + 1) % nombreDeJoueurs];
  return prochainLanceur;
};

export { lanceurSuivant };
