import i18n from "i18n-js";
import * as Localization from "expo-localization";

export function enableI18n() {
  i18n.locale = Localization.locale;
  i18n.fallbacks = true;
}

i18n.translations = {
  en: {
    choixJeu: "Choose your game",
    cricket: {
      instructions1: "Touch one cell of the scoreboard",
      instructions2: "to mark a player's dart",
    },
    inscrire: "Add the players",
    inscription: {
      placeholder: "Player's name",
    },
    jouer: "Start",
    joueur: "Player...",
  },
  fr: {
    choixJeu: "Choisissez votre jeu",
    cricket: {
      instructions1: "Touche une case du tableau",
      instructions2: "pour indiquer une touche du joueur",
    },
    inscrire: "Ajoutez les joueurs",
    inscription: {
      placeholder: "Nom du joueur",
    },
    jouer: "Jouer",
    joueur: "Joueur...",
  },
};
