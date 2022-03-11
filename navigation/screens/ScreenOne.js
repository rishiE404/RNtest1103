import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function ScreenOne({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* <Text
        onPress={() => navigation.navigate('ScreenOne')}
        style={{fontSize: 26, fontWeight: 'bold'}}>
        Screen One
      </Text> */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('two');
        }}
        style={{
          marginBottom: 50,
          backgroundColor: '#5F0B65',
          padding: 20,
          borderRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 18, color: '#fff'}}>
          View List of Countries
        </Text>
      </TouchableOpacity>
    </View>
  );
}
