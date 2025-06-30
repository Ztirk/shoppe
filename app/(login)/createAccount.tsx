import React from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
import StyledButton from "@/components/StyledButton";
import { Link } from "expo-router";
import StyledTextInput from "@/components/StyledTextIput";

function createAccount() {
  return (
    <SafeAreaView className="bg-white h-full flex justify-center items-center">
      <Image
        className="scale-[.6] absolute -top-[450px] -left-[450px]"
        source={require("@/assets/images/background-1.png")}
      />

      <View>
        <Text className="text-[50px] font-['Raleway-Bold']">Create</Text>
        <Text className="text-[50px] font-['Raleway-Bold']">Account</Text>
        <Image
          className="h-[90px] aspect-square mt-[56px] mb-[32px]"
          source={require("@/assets/images/camera.png")}
        />

        <StyledTextInput label="Email" />

        <StyledTextInput
          label="Password"
          right={<TextInput.Icon icon="eye" />}
        />

        <StyledTextInput
          label="Your number"
          left={<TextInput.Icon icon="cellphone" />}
        />

        <StyledButton
          href="createAccount"
          text="Done"
          mode="contained"
          backgroundColor="#004CFF"
          marginTop={45}
        />

        <StyledButton href="/" text="Cancel" mode="text" marginTop={5}/>
      </View>
    </SafeAreaView>
  );
}

export default createAccount;
