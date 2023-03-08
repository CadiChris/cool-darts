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
    cricket: {
      instructions1: "Touch one cell of the scoreboard",
      instructions2: "to mark a player's dart",
    },
  },
  fr: {
    choixJeu: "Choisissez votre jeu",
    inscrire: "Ajoutez les joueurs",
    jouer: "Jouer",
    joueur: "Joueur...",
    cricket: {
      instructions1: "Touche une case du tableau",
      instructions2: "pour indiquer une touche du joueur",
    },
  },
};
