import { useSelector } from "react-redux";
import { combineReducers, createStore } from "redux";
import inscriptionDesJoueurs from "./InscriptionDesJoueurs/domaine/reducer";
import cricket from "./Cricket/domaine/reducer";
import { DEMARRER_CRICKET } from "./Cricket/domaine/actions";
import undoable from "./undo/undoable";

export const getStore = () =>
  createStore(
    combineReducers({
      inscriptionDesJoueurs,
      cricket: undoable(cricket, [DEMARRER_CRICKET]),
    })
  );

export const useCricketFn = (fn, ...params) =>
  useSelector((state) => fn(state.cricket.actuel, ...params));

export const useInscription = (selecteur) =>
  useSelector((state) => state.inscriptionDesJoueurs[selecteur]);

export const useInscriptionFn = (fn, ...params) =>
  useSelector((state) => fn(state.inscriptionDesJoueurs, ...params));

export const useCanUndo = (jeu) =>
  useSelector((state) => state[jeu].precedents.length > 0);

export const useCanRedo = (jeu) =>
  useSelector((state) => state[jeu].suivants.length > 0);
