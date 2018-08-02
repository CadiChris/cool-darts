import React from "react";
import { Text, View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { Styles, Textes } from "../../styles";
import InscriptionDesJoueurs from "../InscriptionDesJoueurs";

storiesOf("Inscription des joueurs", module)
  .addDecorator(story => <View style={Styles.container}>{story()}</View>)
  .add("Inscription", () => (
    <InscriptionDesJoueurs>
      {joueurs => (
        <Text style={[Textes.titre]}>
          Partie démarrée avec {joueurs.map(j => j).join(", ")}
        </Text>
      )}
    </InscriptionDesJoueurs>
  ));
