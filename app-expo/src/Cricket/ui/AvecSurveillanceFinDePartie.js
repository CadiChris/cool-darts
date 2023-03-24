import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { View } from "react-native";
import { RouteVainqueurs } from "./Vainqueurs";
import { useCricketFn } from "../../redux";
import { selectVainqueurs } from "../domaine/reducer";

export function AvecSurveillanceFinDePartie(props) {
  const vainqueurs = useCricketFn(selectVainqueurs);
  const navigation = useNavigation();

  useEffect(() => {
    if (vainqueurs.length > 0) navigation.navigate(RouteVainqueurs);
  }, [vainqueurs]);

  return <View style={{ flex: 1 }}>{props.children}</View>;
}
