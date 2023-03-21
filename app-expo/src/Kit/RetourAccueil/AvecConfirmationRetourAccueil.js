import { BackHandler } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

export function AvecConfirmationRetourAccueil({ children }) {
  const navigation = useNavigation();

  // https://reactnavigation.org/docs/custom-android-back-button-handling
  useFocusEffect(() => {
    const subscription = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        navigation.navigate("Modale/ConfirmeRetourAccueil");
        return true;
      }
    );

    return () => subscription.remove();
  });

  return children;
}
