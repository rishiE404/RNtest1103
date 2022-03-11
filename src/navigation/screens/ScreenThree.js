import React from 'react';
import {View, Text} from 'react-native';

export default function ScreenThree({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        onPress={() => navigation.navigate('ScreenOne')}
        style={{fontSize: 26, fontWeight: 'bold'}}>
        Screen Three
      </Text>
    </View>
  );
}
