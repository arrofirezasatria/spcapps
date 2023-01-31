import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function First() {
  return (
    <View style={style.container}>
      <Text>First</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
});
