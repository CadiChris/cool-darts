import React from 'react';
import {connect} from 'react-redux';
import TableauDesScores from './TableauDesScores';
import {visiter} from '../../domaine/actions';

const mapStateToProps = state => ({
  scores: state.cricket.actuel.scores,
  vainqueurs: state.cricket.actuel.vainqueurs,
  actif: state.cricket.actuel.vainqueurs.length === 0,
});

const mapDispatchToProps = dispatch => ({
  onVisite: (joueur, visite) => dispatch(visiter(joueur, visite)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableauDesScores);
