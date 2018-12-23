const Contrats = {
  chiffre: (chiffre, nombreDeTouches) => ({
    valeur: chiffre * nombreDeTouches,
    nom: `${chiffre}`,
    estRempli: nombreDeTouches > 0
  }),

  double: chiffresTouches => ({
    valeur: chiffresTouches.reduce((total, chiffre) => total + chiffre * 2, 0),
    nom: "DOUBLE",
    estRempli: chiffresTouches.length > 0
  }),

  triple: chiffresTouches => ({
    valeur: chiffresTouches.reduce((total, chiffre) => total + chiffre * 3, 0),
    nom: "TRIPLE",
    estRempli: chiffresTouches.length > 0
  })
};

export default Contrats;
