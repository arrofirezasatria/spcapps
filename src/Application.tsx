import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import First from "./screens/First";
import Second from "./screens/Second";

type RootStackParamList = {
  first: undefined;
  second: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

export default function Application() {
  return (
    <NavigationContainer>
      <RootStack.Screen name="first" component={First} />
      <RootStack.Screen name="second" component={Second} />
    </NavigationContainer>
  );
}
