import InscriptionDesJoueurs from "./InscriptionDesJoueurs";
import { connect } from "react-redux";
import {
  choisirJeu,
  desinscrireJoueur,
  inscrireJoueur,
  reordonnerJoueur
} from "../domaine/actions";

const mapStateToProps = state => ({
  inscrits: state.inscriptionDesJoueurs.inscrits,
  jeuxDisponibles: state.inscriptionDesJoueurs.jeuxDisponibles,
  jeu: state.inscriptionDesJoueurs.jeuChoisi,
  demarrerLaPartieEstPossible: state.inscriptionDesJoueurs.laPartiePeutDemarrer
});

const mapDispatchToProps = dispatch => ({
  onInscription: nomInscrit => dispatch(inscrireJoueur(nomInscrit)),
  onReordonner: (position, mouvement) =>
    dispatch(reordonnerJoueur(position, mouvement)),
  onDesinscription: nomDesinscrit => dispatch(desinscrireJoueur(nomDesinscrit)),
  onChangementDeJeu: jeuChoisi => dispatch(choisirJeu(jeuChoisi))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InscriptionDesJoueurs);
