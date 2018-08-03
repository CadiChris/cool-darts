import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { EnTete } from "./EnTete";

const TableauDesScores = ({ scores }) => (
  <View style={{ flex: 1 }}>
    <EnTete joueurs={Object.keys(scores)} />
  </View>
);

TableauDesScores.propTypes = {
  scores: PropTypes.object.isRequired
};

export default TableauDesScores;
