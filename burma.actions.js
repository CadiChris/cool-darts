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

// TODO: supprimer l'actionCreator volee au profit de voleeChiffree, voleeSurDouble et voleeSurTriple
const VOLEE = "VOLEE";
const volee = (lanceur, rang, nombreDeTouches) => ({
  type: VOLEE,
  payload: {
    lanceur,
    rang,
    nombreDeTouches
  }
});

const voleeChiffree = (lanceur, rang, nombreDeTouches) => ({
  type: VOLEE,
  payload: {
    lanceur,
    rang,
    touches: [{ chiffre: rang, nombre: nombreDeTouches }]
  }
});

const voleeSurDouble = (lanceur, touches) => ({
  type: VOLEE,
  payload: {
    lanceur,
    rang: "DOUBLE",
    touches
  }
});

export {
  INSCRIRE_JOUEUR,
  inscrireJoueur,
  DEMARRER_PARTIE,
  demarrerPartie,
  VOLEE,
  volee,
  voleeChiffree,
  voleeSurDouble
};
