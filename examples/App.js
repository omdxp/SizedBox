import React from 'react';
import {View} from 'react-native';
import ExampleTwo from './ExampleTwo';

export default function App() {
  return (
    <View>
      {/* This examples shows how to add vertical space between components */}
      <ExampleOne />
      {/* This examples shows how to add horizontal space between components */}
      <ExampleTwo />
    </View>
  );
}
