import React from "react";
import { connect } from "react-redux";
import { inscrireJoueur, demarrerPartie } from "../Cricket/actions";
import InscriptionDesJoueurs from "./InscriptionDesJoueurs";

const mapStateToProps = state => ({
  laPartiePeutDemarrer: state.cricket.actuel.peutDemarrer,
  joueurs: state.cricket.actuel.joueurs,
  inscriptionEstPossible: joueur => {
    const joueurAvecNom = joueur !== "";
    const nomUnique = !state.cricket.actuel.joueurs.includes(joueur);

    return joueurAvecNom && nomUnique;
  }
});

const mapDispatchToProps = dispatch => ({
  onInscrireJoueur: joueur => {
    dispatch(inscrireJoueur(joueur));
  },
  onDemarrerLaPartie: () => dispatch(demarrerPartie())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InscriptionDesJoueurs);
