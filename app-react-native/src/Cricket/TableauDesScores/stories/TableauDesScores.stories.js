import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { withKnobs, object, array } from "@storybook/addon-knobs";
import cricket from "../../reducer";
import TableauDesScores from "../TableauDesScores";
import { demarrerPartie, inscrireJoueur, lancerFlechette } from "../../actions";
import { Styles } from "../../styles";

const partieDeTest = [
  inscrireJoueur("Noémie"),
  inscrireJoueur("Christophe"),
  demarrerPartie(),
  lancerFlechette("Noémie", 17, 3),
  lancerFlechette("Noémie", 20, 1),
  lancerFlechette("Noémie", 17, 2),
  lancerFlechette("Christophe", 15, 2)
].reduce(cricket, undefined);

storiesOf("Cricket", module)
  .addDecorator(story => <View style={Styles.container}>{story()}</View>)
  .addDecorator(withKnobs)
  .add("Tableau des scores", () => (
    <TableauDesScores
      vainqueurs={array("Vainqueurs", ["Noémie"])}
      scores={object("Scores", partieDeTest.scores)}
      onLancerDansSimple={action("Lancer")}
    />
  ));
