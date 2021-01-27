import React from 'react';
import {View, Text} from 'react-native';
import {SizedBox} from 'sizedbox';

export default function ExampleTwo() {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <Text style={{fontSize: 20}}>One</Text>
      <SizedBox horizontal={10} />
      <Text style={{fontSize: 20}}>Two</Text>
    </View>
  );
}
