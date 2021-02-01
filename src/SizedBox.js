import React from "react";
import { View, StyleSheet } from "react-native";

export default function SizedBox({ vertical, horizontal }) {
  return (
    <View style={{ marginVertical: vertical, marginHorizontal: horizontal }} />
  );
}
