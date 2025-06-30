import StyledButton from "@/components/StyledButton";
import { Link, useRouter } from "expo-router";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button, Icon } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

function Login() {
  const router = useRouter();

  return (
    <SafeAreaView className="bg-white h-full flex justify-center items-center">
      <View className="flex gap-3 items-center">
        <View className="shadow-[0_5px_4px_rgba(0,0,0,1)] rounded-full bg-white h-[134px] aspect-square flex justify-center items-center ">
          <Image
            className="h-[92px] w-[81.4px] "
            source={require("@/assets/images/logo.png")}
          />
        </View>

        <Text className="text-[52px] text-[#202020] font-['Raleway-ExtraBold']">
          Shoppe
        </Text>

        <View className="flex items-center gap-2">
          <Text className="font-['Raleway-Regular'] text-[19px]">
            Beautiful eCommerce UI Kit
          </Text>

          <Text className="font-['Raleway-Regular'] text-[19px]">
            for your online store
          </Text>
        </View>
      </View>

      <Button
        mode={"contained"}
        onPress={() => router.navigate("/main")}
        style={{
          marginTop: 106,
          backgroundColor: "#004CFF",
          height: 61,
          width: 335,
          display: "flex",
          justifyContent: "center",
          borderRadius: 15,
        }}
        labelStyle={{ fontSize: 22 }}
      >
        Let's get started
      </Button>

      <View className="flex flex-row items-center gap-2 mt-[18px]">
        <Text className="font-['Raleway-Regular']">
          I already have an account
        </Text>

        <Link href={"/createAccount"}>
          <View className="flex items-center justify-center h-[30px] w-[30px] bg-[#004CFF] rounded-full">
            <Image
              className="h-[11px] w-[14px]"
              source={require("@/assets/images/arrow-right.png")}
            />
          </View>
        </Link>
      </View>
    </SafeAreaView>
  );
}

export default Login;