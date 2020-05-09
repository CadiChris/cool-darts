import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-native';
import Navigation from './Navigation';
import {redo, undo} from '../undo/undoable';

const mapStateToProps = state => ({
  aucunPrecedent:
    state[state.inscriptionDesJoueurs.jeuChoisi].precedents.length === 0,
  aucunSuivant:
    state[state.inscriptionDesJoueurs.jeuChoisi].suivants.length === 0,
});

const mapDispatchToProps = (dispatch, {history}) => ({
  onQuitterLaPartie: () => history.push('/inscription'),
  onUndo: () => dispatch(undo()),
  onRedo: () => dispatch(redo()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Navigation),
);
