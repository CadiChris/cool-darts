import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useKeepAwake } from "expo-keep-awake";
import { getStore } from "./src/redux";
import { Provider } from "react-redux";
import { WithFonts } from "./src/Kit/WithFonts";
import { enableI18n } from "./src/i18n/i18n";
import { Principal } from "./src/Kit/Principal";
import { Cricket } from "./src/Cricket/ui";
import { InscriptionDesJoueurs } from "./src/InscriptionDesJoueurs/ui";
import { ConfirmeRetourAccueil } from "./src/Kit/RetourAccueil/ConfirmeRetourAccueil";

enableI18n();
const store = getStore();
const Stack = createNativeStackNavigator();

export default function App() {
  useKeepAwake();

  return (
    <Provider store={store}>
      <WithFonts>
        <Principal>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{ headerShown: false }}
              initialRouteName="/"
            >
              <Stack.Group>
                <Stack.Screen name="/" component={InscriptionDesJoueurs} />
                <Stack.Screen name="Cricket" component={Cricket} />
              </Stack.Group>
              <Stack.Group screenOptions={{ presentation: "transparentModal" }}>
                <Stack.Screen
                  name="Modale/ConfirmeRetourAccueil"
                  component={ConfirmeRetourAccueil}
                />
              </Stack.Group>
            </Stack.Navigator>
          </NavigationContainer>
        </Principal>
      </WithFonts>
    </Provider>
  );
}
