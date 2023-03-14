import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { getStore } from "./src/redux";
import { Provider } from "react-redux";
import { WithFonts } from "./src/Kit/WithFonts";
import { enableI18n } from "./src/i18n/i18n";
import { Principal } from "./src/Kit/Principal";
import { Cricket } from "./src/Cricket/ui";
import { InscriptionDesJoueurs } from "./src/InscriptionDesJoueurs/ui";

enableI18n();
const store = getStore();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <WithFonts>
        <Principal>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{ headerShown: false }}
              initialRouteName="Inscription"
            >
              <Stack.Screen
                name="Inscription"
                component={InscriptionDesJoueurs}
              />
              <Stack.Screen name="Cricket" component={Cricket} />
            </Stack.Navigator>
          </NavigationContainer>
        </Principal>
      </WithFonts>
    </Provider>
  );
}
