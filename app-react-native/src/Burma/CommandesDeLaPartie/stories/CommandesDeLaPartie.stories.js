import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs, text } from "@storybook/addon-knobs/react";
import { action } from "@storybook/addon-actions";
import CommandesDeLaPartie from "../CommandesDeLaPartie";
import { View } from "react-native";
import { Styles } from "../../../styles";

storiesOf("Burma", module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <View style={[Styles.container, { paddingTop: 50 }]}>{story()}</View>
  ))
  .add("Commandes de la partie", () => (
    <CommandesDeLaPartie
      lanceur={text("lanceur", "Noémie")}
      chiffreCourant={text("chiffre courant", "17")}
      onLancer={action("lancer")}
    />
  ));
