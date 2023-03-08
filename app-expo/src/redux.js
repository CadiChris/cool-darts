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

export const useInscription = (selecteur) =>
  useSelector((state) => state.inscriptionDesJoueurs[selecteur]);

export const useCricketFn = (fn, ...params) =>
  useSelector((state) => fn(state.cricket.actuel, ...params));
