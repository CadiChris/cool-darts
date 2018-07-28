import freeze from "deep-freeze";
import cricket from "../reducer";
import {
  inscrireJoueur,
  demarrerPartie,
  lancerFlechette,
  nouvellePartie
} from "../actions";

it("retourne le state initial", () => {
  expect(cricket(undefined, {})).toEqual({
    joueurs: [],
    peutDemarrer: false,
    phase: "INSCRIPTION",
    scores: [],
    vainqueurs: []
  });
});

it("inscrit des joueurs", () => {
  const avecJoueurs = executer([inscrireJoueur("J1"), inscrireJoueur("J2")]);

  expect(avecJoueurs.peutDemarrer).toBe(true);
  expect(avecJoueurs.joueurs).toEqual(["J1", "J2"]);
  expect(avecJoueurs.scores).toEqual([
    {
      joueur: "J1",
      points: 0,
      cible: {
        15: { touches: 0, ferme: false },
        16: { touches: 0, ferme: false },
        17: { touches: 0, ferme: false },
        18: { touches: 0, ferme: false },
        19: { touches: 0, ferme: false },
        20: { touches: 0, ferme: false },
        25: { touches: 0, ferme: false }
      }
    },
    {
      joueur: "J2",
      points: 0,
      cible: {
        15: { touches: 0, ferme: false },
        16: { touches: 0, ferme: false },
        17: { touches: 0, ferme: false },
        18: { touches: 0, ferme: false },
        19: { touches: 0, ferme: false },
        20: { touches: 0, ferme: false },
        25: { touches: 0, ferme: false }
      }
    }
  ]);
});

it("démarre la partie", () => {
  const partieDemarree = executer([
    inscrireJoueur("J1"),
    inscrireJoueur("J2"),
    demarrerPartie()
  ]);

  expect(partieDemarree.phase).toBe("EN_COURS");
});

it("modifie le score sur un lancer de fléchette", () => {
  const apresLancerDeJ1 = executer([
    inscrireJoueur("J1"),
    lancerFlechette("J1", 20, 1)
  ]);

  expect(apresLancerDeJ1.scores[0].cible[20]).toEqual({
    touches: 1,
    ferme: false
  });
});

it("met fin à la partie sur le lancer qui désigne le vainqueur", () => {
  const partieAvecUnJoueur = executer([inscrireJoueur("J1"), demarrerPartie()]);

  const toutFermeSaufLeBull = [15, 16, 17, 18, 19, 20].reduce(
    (state, chiffre) => cricket(state, lancerFlechette("J1", chiffre, 3)),
    partieAvecUnJoueur
  );

  expect(toutFermeSaufLeBull.phase).toBe("EN_COURS");

  const fermerLeBull = lancerFlechette("J1", 25, 3);
  const partieTerminee = cricket(toutFermeSaufLeBull, fermerLeBull);

  expect(partieTerminee.phase).toEqual("TERMINEE");
  expect(partieTerminee.vainqueurs).toEqual(["J1"]);
});

it("recrée une nouvelle partie", () => {
  const partieVierge = cricket(undefined, {});

  const partieRedemarree = executer([
    inscrireJoueur("J1"),
    demarrerPartie(),
    nouvellePartie()
  ]);

  expect(partieRedemarree).toEqual(partieVierge);
});

const executer = actions =>
  actions.reduce((state, action) => {
    const nextState = cricket(state, action);
    freeze(nextState);
    return nextState;
  }, undefined);
