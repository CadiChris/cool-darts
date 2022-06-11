import InscriptionDesJoueurs from "./src/InscriptionDesJoueurs/ui/InscriptionDesJoueurs.container";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { getStore } from "./src/redux";
import { Provider } from "react-redux";
import { WithFonts } from "./src/Kit/WithFonts";
import { enableI18n } from "./src/i18n/i18n";

enableI18n();
const store = getStore();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <WithFonts>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Inscription"
              component={InscriptionDesJoueurs}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </WithFonts>
    </Provider>
  );
}
