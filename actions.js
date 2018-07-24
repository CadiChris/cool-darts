import Contrats from "./Contrats";

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

const VOLEE = "VOLEE";
const voleeSurChiffre = (lanceur, chiffre, nombreDeTouches) => ({
  type: VOLEE,
  payload: {
    lanceur,
    contrat: new Contrats.chiffre(chiffre, nombreDeTouches)
  }
});

const voleeSurDouble = (lanceur, chiffresTouches) => ({
  type: VOLEE,
  payload: {
    lanceur,
    contrat: new Contrats.double(chiffresTouches)
  }
});

const voleeSurTriple = (lanceur, chiffresTouches) => ({
  type: VOLEE,
  payload: {
    lanceur,
    contrat: new Contrats.triple(chiffresTouches)
  }
});

const voleeSurBull = (lanceur, nombreDeSimplesBull, nombreDeDoublesBull) => ({
  type: VOLEE,
  payload: {
    lanceur,
    contrat: new Contrats.bull(nombreDeSimplesBull, nombreDeDoublesBull)
  }
});

export {
  INSCRIRE_JOUEUR,
  inscrireJoueur,
  DEMARRER_PARTIE,
  demarrerPartie,
  VOLEE,
  voleeSurChiffre,
  voleeSurDouble,
  voleeSurTriple,
  voleeSurBull
};
