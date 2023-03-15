import React, { useEffect } from "react";
import { useWindowDimensions } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export const ViewQuiDecale = ({
  depuisGauche,
  depuisDroite,
  depuisHaut,
  depuisBas,
  style,
  children,
}) => {
  const { width, height } = useWindowDimensions();
  const decalageHorizontal = useSharedValue(depuisDroite ? width : -width);
  const decalageVertical = useSharedValue(depuisBas ? height : -height);

  useEffect(() => {
    (depuisGauche || depuisDroite) && (decalageHorizontal.value = 0);
    (depuisHaut || depuisBas) && (decalageVertical.value = 0);
  }, []);

  const $$decalage = useAnimatedStyle(() => {
    const transform = [
      (depuisGauche || depuisDroite) && {
        translateX: withSpring(decalageHorizontal.value),
      },
      (depuisHaut || depuisBas) && {
        translateY: withSpring(decalageVertical.value),
      },
    ].filter((t) => !!t);

    return { transform };
  });

  return <Animated.View style={[style, $$decalage]}>{children}</Animated.View>;
};
