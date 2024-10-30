import { router } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  return (
    <SafeAreaView>
      <Text>SignUp</Text>
      <Text
        onPress={() => {
          router.replace("/(auth)/onboarding");
        }}
      >
        GO Back
      </Text>
    </SafeAreaView>
  );
};

export default SignUp;
