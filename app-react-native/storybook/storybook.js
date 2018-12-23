/* eslint-disable global-require */

import { AppRegistry } from "react-native";
import { getStorybookUI, configure } from "@storybook/react-native";

// import stories
configure(() => {
  require("../src/Cricket/ui/TableauDesScores/stories/TableauDesScores.stories");
  require("../src/Cricket/ui/TableauDesScores/stories/Visite.stories");
  require("../src/Burma/ui/TableauDesScores/stories/TableauDesScores.stories");
  require("../src/Burma/ui/CommandesDeLaPartie/stories/CommandesDeLaPartie.stories");
  require("../src/Burma/ui/Vainqueur/stories/Vainqueur.stories");
  require("../src/InscriptionDesJoueurs/ui/stories/ListeDesInscrits.stories");
  require("../src/InscriptionDesJoueurs/ui/stories/InscriptionDesJoueurs.stories");
}, module);

// This assumes that storybook is running on the same host as your RN packager,
// to set manually use, e.g. host: 'localhost' option
const StorybookUI = getStorybookUI({ port: 7007, onDeviceUI: true });
AppRegistry.registerComponent("alkeyacricket", () => StorybookUI);
export default StorybookUI;
