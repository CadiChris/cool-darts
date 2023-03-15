import deepFreeze from "deep-freeze";
import inscriptionDesJoueurs, {
  couleurDuJoueur,
  CouleursJoueurs,
} from "../reducer";
import {
  choisirJeu,
  desinscrireJoueur,
  inscrireJoueur,
  reordonnerJoueur,
} from "../actions";

describe("reducer Inscription des joueurs", () => {
  it("retourne le state initial", () => {
    expect(inscriptionDesJoueurs(undefined, {})).toEqual({
      inscrits: [],
      couleurs: [],
      jeuxDisponibles: ["burma", "cricket"],
      jeuChoisi: "burma",
      laPartiePeutDemarrer: false,
    });
  });

  it("inscrit des joueurs", () => {
    const deuxInscrits = executer([inscrireJoueur("A"), inscrireJoueur("B")]);

    expect(deuxInscrits.inscrits).toEqual(["A", "B"]);
  });

  describe("pour la gestion des couleurs des joueurs", () => {
    it("attribue la première couleur au premier joueur", () => {
      const unInscrit = executer([inscrireJoueur("A")]);

      expect(couleurDuJoueur(unInscrit, "A")).toBe(CouleursJoueurs[0]);
    });

    it("attribue la seconde couleur au second joueur", () => {
      const deuxInscrits = executer([inscrireJoueur("A"), inscrireJoueur("B")]);

      expect(couleurDuJoueur(deuxInscrits, "A")).toBe(CouleursJoueurs[0]);
      expect(couleurDuJoueur(deuxInscrits, "B")).toBe(CouleursJoueurs[1]);
    });

    it("ne change pas la couleur d'un joueur dont on inscrit deux fois le nom", () => {
      const unInscritDeuxFois = executer([
        inscrireJoueur("A"),
        inscrireJoueur("A"),
      ]);

      expect(couleurDuJoueur(unInscritDeuxFois, "A")).toBe(CouleursJoueurs[0]);
    });

    it("réutilise la couleur d'un joueur désinscrit", () => {
      const quiRecycle = executer([
        inscrireJoueur("A"),
        inscrireJoueur("B"),
        desinscrireJoueur("A"),
        inscrireJoueur("C"),
      ]);

      expect(couleurDuJoueur(quiRecycle, "B")).toBe(CouleursJoueurs[1]);
      expect(couleurDuJoueur(quiRecycle, "C")).toBe(CouleursJoueurs[0]);
    });
  });

  it("désinscrit des joueurs", () => {
    const apresDesinscription = executer([
      inscrireJoueur("A (va être désinscrit)"),
      inscrireJoueur("B"),
      desinscrireJoueur("A (va être désinscrit)"),
    ]);

    expect(apresDesinscription.inscrits).toEqual(["B"]);
  });

  it("n'inscrit pas 2 fois le même joueur", () => {
    const apresPlusieursFoisLeMemeInscrit = executer([
      inscrireJoueur("A"),
      inscrireJoueur("A"),
      inscrireJoueur("A"),
    ]);

    expect(apresPlusieursFoisLeMemeInscrit.inscrits).toEqual(["A"]);
  });

  it("ré-ordonne les joueurs", () => {
    const ordreModifie = executer([
      inscrireJoueur("A"),
      inscrireJoueur("B"),
      inscrireJoueur("C"),
      reordonnerJoueur(0, +1),
    ]);

    expect(ordreModifie.inscrits).toEqual(["B", "A", "C"]);

    const deuxiemeModification = executer(
      [reordonnerJoueur(2, -1)],
      ordreModifie
    );

    expect(deuxiemeModification.inscrits).toEqual(["B", "C", "A"]);
  });

  it("permet de choisir un jeu", () => {
    const apresChoixDeJeu = executer([choisirJeu("mon jeu favori")]);

    expect(apresChoixDeJeu.jeuChoisi).toBe("mon jeu favori");
  });

  it("permet de démarrer la partie dès qu'on a 1 inscrit", () => {
    const avecUnInscrit = executer([inscrireJoueur("#1")]);

    expect(avecUnInscrit.laPartiePeutDemarrer).toBe(true);
  });
});

const executer = (actions, stateInitial = undefined) =>
  actions.reduce((state, action) => {
    const nextState = inscriptionDesJoueurs(state, action);
    deepFreeze(nextState);
    return nextState;
  }, stateInitial);
