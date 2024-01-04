import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack, router } from "expo-router";

const Home = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          headerTitle: "Home",
          headerStyle: { backgroundColor: "red" },
        }}
      ></Stack.Screen>
      <Link href="/users/1">Go to user 1</Link>
      <Button
        title="Go to user 2"
        onPress={() =>
          router.push({ pathname: "/users/[id]", params: { id: 2 } })
        }
      />
    </View>
  );
};

export default Home;
