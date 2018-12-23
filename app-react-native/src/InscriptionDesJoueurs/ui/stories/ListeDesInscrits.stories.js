import React from "react";
import { action } from "@storybook/addon-actions";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { Styles } from "../../../styles";
import ListeDesInscrits from "../ListeDesInscrits";

storiesOf("Inscription des joueurs", module)
  .addDecorator(story => <View style={[Styles.container]}>{story()}</View>)
  .add("Liste des inscrits", () => (
    <ListeDesInscrits
      inscrits={["Pamela", "Jim"]}
      onReordonner={action("Réordonne")}
      onDesinscription={action("Désinscription")}
    />
  ));
