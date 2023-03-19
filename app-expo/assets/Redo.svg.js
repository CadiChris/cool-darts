import { View } from "react-native";
import { Undo } from "./Undo.svg.js";

export const Redo = ({ width, height, transform }) => {
  return (
    <View style={{ transform: [{ scaleX: -1 }] }}>
      <Undo width={width} height={height} transform={transform} />
    </View>
  );
};
