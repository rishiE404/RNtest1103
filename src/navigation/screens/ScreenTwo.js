import React from 'react';
import {View, Text} from 'react-native';

export default function ScreenTwo({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        onPress={() => navigation.navigate('ScreenOne')}
        style={{fontSize: 26, fontWeight: 'bold'}}>
        Screen Two
      </Text>
    </View>
  );
}
