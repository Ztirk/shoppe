import { Stack, useRouter } from "expo-router";
import "react-native-reanimated";

export default function LoginStack() {
  return (
    <>
      <Stack
        initialRouteName="createAccount"

      >
        <Stack.Screen
          name="createAccount"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
