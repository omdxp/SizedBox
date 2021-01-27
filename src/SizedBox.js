import React from "react";
import { View, StyleSheet } from "react-native";

export default function SizedBox({ vertical, horizontal }) {
  return (
    vertical ?? <View style={{ marginVertical: vertical }} />,
    horizontal ?? <View style={{ marginHorizontal: horizontal }} />
  );
}
