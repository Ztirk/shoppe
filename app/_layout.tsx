import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import {
  configureFonts,
  MD2LightTheme,
  PaperProvider,
} from "react-native-paper";

import { useColorScheme } from "@/hooks/useColorScheme";

import "../global.css";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    "Raleway-Regular": require("../assets/fonts/Raleway-Regular.ttf"),
    "Raleway-Bold": require("../assets/fonts/Raleway-Bold.ttf"),
    "Raleway-ExtraBold": require("../assets/fonts/Raleway-ExtraBold.ttf"),
    "Raleway-Black": require("../assets/fonts/Raleway-Black.ttf"),
  });

  const fontConfig = {
    web: {
      regular: {
        fontFamily: "sans-serif",
        fontWeight: "normal",
      },
      medium: {
        fontFamily: "sans-serif-medium",
        fontWeight: "normal",
      },
      light: {
        fontFamily: "sans-serif-light",
        fontWeight: "normal",
      },
      thin: {
        fontFamily: "sans-serif-thin",
        fontWeight: "normal",
      },
    },
    ios: {
      regular: {
        fontFamily: "sans-serif",
        fontWeight: "normal",
      },
      medium: {
        fontFamily: "sans-serif-medium",
        fontWeight: "normal",
      },
      light: {
        fontFamily: "sans-serif-light",
        fontWeight: "normal",
      },
      thin: {
        fontFamily: "sans-serif-thin",
        fontWeight: "normal",
      },
    },
    android: {
      regular: {
        fontFamily: "Raleway-Regular",
        fontWeight: "normal",
        textTransform: "none",
      },
      medium: {
        fontFamily: "Raleway-Regular",
        fontWeight: "normal",
        textTransform: "none",
      },
      light: {
        fontFamily: "Raleway-Black",
        fontWeight: "normal",
        textTransform: "none",
      },
      thin: {
        fontFamily: "Raleway-Black",
        fontWeight: "normal",
        textTransform: "none",
      },
    },
  };

  const theme = {
    ...MD2LightTheme,
    fonts: configureFonts({
      config: fontConfig,
      isV3: false,
    }),
  };

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <PaperProvider theme={theme}>
      {/* <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}> */}
      <Stack
        screenOptions={{
          statusBarHidden: false,
          statusBarTranslucent: true,
          statusBarStyle: "dark",
          statusBarBackgroundColor: "transparent",
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(login)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(main)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      </Stack>
      {/* </ThemeProvider> */}
    </PaperProvider>
  );
}
