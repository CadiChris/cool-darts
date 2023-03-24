import { View } from "react-native";
import { FlecheBas } from "./FlecheBas.svg.js";

export const FlecheHaut = ({ width, height }) => {
  return (
    <View style={{ transform: [{ rotate: "180deg" }] }}>
      <FlecheBas width={width} height={height} />
    </View>
  );
};
