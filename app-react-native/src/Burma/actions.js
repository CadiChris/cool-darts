import Contrats from "./Contrats";

export const INSCRIRE_JOUEUR = "INSCRIRE_JOUEUR";
export const inscrireJoueur = nomDuJoueur => ({
  type: INSCRIRE_JOUEUR,
  payload: {
    nomDuJoueur
  }
});

export const DEMARRER_PARTIE = "DEMARRER_PARTIE";
export const demarrerPartie = () => ({
  type: DEMARRER_PARTIE
});

export const VOLEE = "VOLEE";
export const voleeSurChiffre = (lanceur, chiffre, nombreDeTouches) => ({
  type: VOLEE,
  payload: {
    lanceur,
    contrat: new Contrats.chiffre(chiffre, nombreDeTouches)
  }
});

export const voleeSurDouble = (lanceur, chiffresTouches) => ({
  type: VOLEE,
  payload: {
    lanceur,
    contrat: new Contrats.double(chiffresTouches)
  }
});

export const voleeSurTriple = (lanceur, chiffresTouches) => ({
  type: VOLEE,
  payload: {
    lanceur,
    contrat: new Contrats.triple(chiffresTouches)
  }
});

export const voleeSurBull = (
  lanceur,
  nombreDeSimplesBull,
  nombreDeDoublesBull
) => ({
  type: VOLEE,
  payload: {
    lanceur,
    contrat: new Contrats.bull(nombreDeSimplesBull, nombreDeDoublesBull)
  }
});
