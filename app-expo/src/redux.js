import { combineReducers, createStore } from "redux";
import inscriptionDesJoueurs from "./InscriptionDesJoueurs/domaine/reducer";

export const getStore = () =>
  createStore(
    combineReducers({
      inscriptionDesJoueurs,
    })
  );
