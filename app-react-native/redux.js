import {combineReducers, createStore} from 'redux';
import inscriptionDesJoueurs from './src/InscriptionDesJoueurs/domaine/reducer';
import undoable from './src/undo/undoable';
import cricket from './src/Cricket/domaine/reducer';
import {DEMARRER_CRICKET} from './src/Cricket/domaine/actions';
import burma from './src/Burma/domaine/reducer';
import {DEMARRER_BURMA} from './src/Burma/domaine/actions';

export const getStore = () =>
  createStore(
    combineReducers({
      inscriptionDesJoueurs,
      cricket: undoable(cricket, [DEMARRER_CRICKET]),
      burma: undoable(burma, [DEMARRER_BURMA]),
    }),
  );
