import { Stack, useRouter } from "expo-router";
import "react-native-reanimated";

export default function LoginStack() {
  return (
    <>
      <Stack initialRouteName="main">
        <Stack.Screen
          name="main"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
