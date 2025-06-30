import StyledButton from "@/components/StyledButton";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";

function login() {
  return (
    <SafeAreaView>
      <Text>Login</Text>

      <Text>Good to see you back!</Text>

      <StyledButton href={"/"} mode="contained" text="Next" />

      <StyledButton href={"/"} mode="text" text="cancel" />
    </SafeAreaView>
  );
}

export default login;
