const suivant = (tousLesJoueurs, lanceur) => {
  const nombreDeJoueurs = tousLesJoueurs.length;
  const indexDuLanceur = tousLesJoueurs.indexOf(lanceur);
  const prochainLanceur =
    tousLesJoueurs[(indexDuLanceur + 1) % nombreDeJoueurs];
  return prochainLanceur;
};

export { suivant };
