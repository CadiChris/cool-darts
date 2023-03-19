import React from "react";
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  FadeInUp,
} from "react-native-reanimated";

export const ViewQuiDecale = ({
  depuisGauche,
  depuisDroite,
  depuisHaut,
  depuisBas,
  style,
  children,
}) => {
  const entering = depuisGauche
    ? FadeInLeft.springify()
    : depuisDroite
    ? FadeInRight.springify()
    : depuisBas
    ? FadeInDown.springify()
    : depuisHaut
    ? FadeInUp.springify()
    : null;

  const $$entering = entering.stiffness(570).damping(30).mass(3);

  return (
    <Animated.View style={[style]} entering={$$entering} exiting={FadeInDown}>
      {children}
    </Animated.View>
  );
};
