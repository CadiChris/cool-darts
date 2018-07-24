const INSCRIRE_JOUEUR = "INSCRIRE_JOUEUR";
const inscrireJoueur = nomDuJoueur => ({
  type: INSCRIRE_JOUEUR,
  payload: {
    nomDuJoueur
  }
});

const DEMARRER_PARTIE = "DEMARRER_PARTIE";
const demarrerPartie = () => ({
  type: DEMARRER_PARTIE
});

const VOLEE_SUR_CHIFFRE = "VOLEE_SUR_CHIFFRE";
const voleeSurChiffre = (lanceur, chiffre, nombreDeTouches) => ({
  type: VOLEE_SUR_CHIFFRE,
  payload: {
    lanceur,
    chiffre,
    nombreDeTouches
  }
});

const VOLEE_SUR_DOUBLE = "VOLEE_SUR_DOUBLE";
const voleeSurDouble = (lanceur, chiffresTouches) => ({
  type: VOLEE_SUR_DOUBLE,
  payload: {
    lanceur,
    chiffresTouches
  }
});

const VOLEE_SUR_TRIPLE = "VOLEE_SUR_TRIPLE";
const voleeSurTriple = (lanceur, chiffresTouches) => ({
  type: VOLEE_SUR_TRIPLE,
  payload: {
    lanceur,
    chiffresTouches
  }
});

const VOLEE_SUR_BULL = "VOLEE_SUR_BULL";
const voleeSurBull = (lanceur, nombreDeSimplesBull, nombreDeDoublesBull) => ({
  type: VOLEE_SUR_BULL,
  payload: {
    lanceur,
    nombreDeSimplesBull,
    nombreDeDoublesBull
  }
});

export {
  INSCRIRE_JOUEUR,
  inscrireJoueur,
  DEMARRER_PARTIE,
  demarrerPartie,
  VOLEE_SUR_CHIFFRE,
  VOLEE_SUR_DOUBLE,
  VOLEE_SUR_TRIPLE,
  VOLEE_SUR_BULL,
  voleeSurChiffre,
  voleeSurDouble,
  voleeSurTriple,
  voleeSurBull
};
