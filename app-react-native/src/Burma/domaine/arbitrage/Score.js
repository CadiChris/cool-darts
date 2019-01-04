const POINTS_INITIAUX = 40;

class Score {
  static TABLEAU_DE_DEPART() {
    return [{ contrat: "DEPART", points: POINTS_INITIAUX }];
  }

  constructor(tableau = Score.TABLEAU_DE_DEPART()) {
    this._tableau = tableau;
  }

  noter(contrat) {
    if (contrat.estRempli) return this.nouveauScore(contrat);

    return this.scoreDiviseParDeux(contrat);
  }

  nouveauScore(contrat) {
    return new Score([
      ...this._tableau,
      {
        contrat: contrat.nom,
        points: this.derniersPoints() + contrat.valeur,
        delta: contrat.valeur,
        touches: contrat.touches
      }
    ]);
  }

  scoreDiviseParDeux(contrat) {
    const division = Math.round(this.derniersPoints() / 2);
    return new Score([
      ...this._tableau,
      {
        contrat: contrat.nom,
        points: division,
        delta: division - this.derniersPoints(),
        touches: contrat.touches
      }
    ]);
  }

  derniersPoints() {
    return this._tableau[this._tableau.length - 1].points;
  }

  tableau() {
    return this._tableau;
  }

  estMeilleurQue(autreScore) {
    return this.derniersPoints() > autreScore.derniersPoints();
  }
}

export default Score;
export { POINTS_INITIAUX };
