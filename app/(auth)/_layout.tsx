import { Stack } from "expo-router";

const Layout = () => {
  return (
    // <SafeAreaView>
    <Stack>
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      <Stack.Screen name="sign-up" options={{ headerShown: false }} />
    </Stack>
    // </SafeAreaView>
  );
};

export default Layout;
