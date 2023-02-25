import i18n from "i18n-js";
import * as Localization from "expo-localization";

export function enableI18n() {
  i18n.locale = Localization.locale;
  i18n.fallbacks = true;
}

i18n.translations = {
  en: {
    choixJeu: "Choose your game",
    inscrire: "Add the players",
    jouer: "Start",
    joueur: "Player...",
  },
  fr: {
    choixJeu: "Choisissez votre jeu",
    inscrire: "Ajoutez les joueurs",
    jouer: "Jouer",
    joueur: "Joueur...",
  },
};
