import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs, text } from "@storybook/addon-knobs/react";
import { View } from "react-native";
import { Styles } from "../../../styles";
import Vainqueur from "../Vainqueur";

storiesOf("Burma", module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <View style={[Styles.container, { paddingTop: 50 }]}>{story()}</View>
  ))
  .add("Vainqueur", () => <Vainqueur nom={text("vainqueur", "Noémie")} />);
