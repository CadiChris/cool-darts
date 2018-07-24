const Contrats = {
  chiffre: (chiffre, nombreDeTouches) => ({
    valeur: () => chiffre * nombreDeTouches,
    nom: () => `${chiffre}`,
    estRempli: () => nombreDeTouches > 0
  }),

  double: chiffresTouches => ({
    valeur: () =>
      chiffresTouches.reduce((total, chiffre) => total + chiffre * 2, 0),
    nom: () => "DOUBLE",
    estRempli: () => chiffresTouches.length > 0
  }),

  triple: chiffresTouches => ({
    valeur: () =>
      chiffresTouches.reduce((total, chiffre) => total + chiffre * 3, 0),
    nom: () => "TRIPLE",
    estRempli: () => chiffresTouches.length > 0
  }),

  bull: (nombreDeSimplesBull, nombreDeDoublesBull) => ({
    valeur: () => nombreDeSimplesBull * 25 + nombreDeDoublesBull * 50,
    nom: () => "BULL",
    estRempli: () => nombreDeSimplesBull > 0 || nombreDeDoublesBull > 0
  })
};

export default Contrats;
