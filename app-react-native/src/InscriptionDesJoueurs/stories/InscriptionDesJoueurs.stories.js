import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { withKnobs, array, boolean, text } from "@storybook/addon-knobs";
import { Styles } from "../../styles";
import InscriptionDesJoueurs from "../InscriptionDesJoueurs";
import { NativeRouter } from "react-router-native";

storiesOf("Inscription des joueurs", module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <NativeRouter>
      <View style={Styles.container}>{story()}</View>
    </NativeRouter>
  ))
  .add("Inscription", () => (
    <InscriptionDesJoueurs
      inscrits={array("inscrits", ["Christophe", "Noémie"])}
      jeuxDisponibles={array("jeux disponibles", ["burma", "cricket"])}
      demarrerLaPartieEstPossible={boolean(
        "démarrer la partie est possible",
        true
      )}
      onInscription={action("inscription")}
      onDesinscription={action("désinscription")}
      jeu={text("Jeu", "Cricket")}
      onChangementDeJeu={action("Changement de jeu")}
      onDemarrerLaPartie={action("démarrage")}
    />
  ));
