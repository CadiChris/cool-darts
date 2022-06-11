import { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { View } from "react-native";

export function WithFonts(props) {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          "Lato-Regular": require("../../assets/fonts/Lato-Regular.ttf"),
          "Lato-BlackItalic": require("../../assets/fonts/Lato-BlackItalic.ttf"),
          "Lato-Italic": require("../../assets/fonts/Lato-Italic.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) return null;

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      {props.children}
    </View>
  );
}
