import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { withKnobs, object, text } from "@storybook/addon-knobs/react";
import TableauDesScores from "../TableauDesScores";
import { Styles } from "../../../../styles";
import burma from "../../../domaine/reducer";
import { demarrerBurma, voleeSurChiffre } from "../../../domaine/actions";

const partieDeTest = [
  demarrerBurma(["Noémie", "Christophe", "Olivier", "Baptiste"]),
  voleeSurChiffre("Noémie", "15", 0),
  voleeSurChiffre("Christophe", "15", 2),
  voleeSurChiffre("Olivier", "15", 1),
  voleeSurChiffre("Baptiste", "15", 0),
  voleeSurChiffre("Noémie", "16", 3),
  voleeSurChiffre("Christophe", "16", 0)
].reduce(burma, undefined);

storiesOf("Burma", module)
  .addDecorator(withKnobs)
  .addDecorator(story => <View style={[Styles.container]}>{story()}</View>)
  .add("Tableau des scores", () => (
    <TableauDesScores
      lanceur={text("lanceur", partieDeTest.lanceur)}
      scores={object("scores", partieDeTest.scores)}
      chiffreCourant={partieDeTest.chiffreCourant}
    />
  ));
