import { combineReducers, createStore } from "redux";
import inscriptionDesJoueurs from "./InscriptionDesJoueurs/domaine/reducer";
import { useSelector } from "react-redux";

export const getStore = () =>
  createStore(
    combineReducers({
      inscriptionDesJoueurs,
    })
  );

export const useInscription = (selecteur) =>
  useSelector((state) => state.inscriptionDesJoueurs[selecteur]);
