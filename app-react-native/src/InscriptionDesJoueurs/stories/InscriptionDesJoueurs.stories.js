import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { withKnobs, array, boolean } from "@storybook/addon-knobs";
import { Styles } from "../../styles";
import InscriptionDesJoueurs from "../InscriptionDesJoueurs";

storiesOf("Inscription des joueurs", module)
  .addDecorator(withKnobs)
  .addDecorator(story => <View style={Styles.container}>{story()}</View>)
  .add("Inscription", () => (
    <InscriptionDesJoueurs
      inscrits={array("inscrits", ["Christophe", "Noémie"])}
      onInscription={action("inscription")}
      onDesinscription={action("désinscription")}
      demarrerLaPartieEstPossible={boolean(
        "démarrer la partie est possible",
        true
      )}
      onDemarrerLaPartie={action("démarrage")}
    />
  ));
