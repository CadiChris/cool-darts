import React from 'react';
import {connect} from 'react-redux';
import TableauDesScores from './TableauDesScores';

const mapStateToProps = state => ({
  scores: state.burma.actuel.scores,
  lanceur: state.burma.actuel.lanceur,
  chiffreCourant: state.burma.actuel.chiffreCourant,
});

export default connect(mapStateToProps)(TableauDesScores);
