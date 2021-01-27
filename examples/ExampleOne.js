import React from 'react';
import {View, Text} from 'react-native';
import {SizedBox} from 'sizedbox';

export default function ExampleOne() {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <Text style={{fontSize: 20}}>One</Text>
      <SizedBox vertical={10} />
      <Text style={{fontSize: 20}}>Two</Text>
    </View>
  );
}
