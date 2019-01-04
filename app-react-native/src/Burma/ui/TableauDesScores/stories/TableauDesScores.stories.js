import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { withKnobs, object, text } from "@storybook/addon-knobs/react";
import TableauDesScores from "../TableauDesScores";
import { Styles } from "../../../../styles";
import burma from "../../../domaine/reducer";
import {
  demarrerBurma,
  voleeSurChiffre,
  voleeSurDouble
} from "../../../domaine/actions";

const partieDeTest = [
  demarrerBurma(["Noémie", "Christophe", "Olivier", "Baptiste"]),
  voleeSurChiffre("Noémie", "15", 0),
  voleeSurChiffre("Christophe", "15", 6),
  voleeSurChiffre("Olivier", "15", 1),
  voleeSurChiffre("Baptiste", "15", 0),
  voleeSurChiffre("Noémie", "16", 3),
  voleeSurChiffre("Christophe", "16", 0),
  voleeSurChiffre("Olivier", "16", 0),
  voleeSurChiffre("Baptiste", "16", 1),
  voleeSurDouble("Noémie", [13, 6, 20]),
  voleeSurDouble("Christophe", []),
  voleeSurDouble("Olivier", [9, 8]),
  voleeSurDouble("Baptiste", [12])
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
