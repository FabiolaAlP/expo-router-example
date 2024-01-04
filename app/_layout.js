import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* <Stack.Screen name="index" path="/" />
      <Stack.Screen
        name="users/[id]"
        path="users/[id]"
        options={{
          headerTitle: "User Page",
        }}
      /> */}
    </Stack>
  );
};

export default RootLayout;
