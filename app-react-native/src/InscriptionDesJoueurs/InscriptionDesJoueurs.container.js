import InscriptionDesJoueurs from "./InscriptionDesJoueurs";
import { connect } from "react-redux";
import { desinscrireJoueur, inscrireJoueur } from "./actions";

const mapStateToProps = state => ({
  inscrits: state.inscriptionDesJoueurs.inscrits,
  jeu: "cricket",
  demarrerLaPartieEstPossible: state.inscriptionDesJoueurs.laPartiePeutDemarrer
});

const mapDispatchToProps = dispatch => ({
  onInscription: nomInscrit => dispatch(inscrireJoueur(nomInscrit)),
  onDesinscription: nomDesinscrit => dispatch(desinscrireJoueur(nomDesinscrit))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InscriptionDesJoueurs);
