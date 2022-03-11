import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const DisplayCountries = props => {
  return (
    <View style={styles.screen}>
      <Text
        onPress={() => props.navigate('ScreenOne')}
        style={{fontSize: 26, fontWeight: 'bold'}}>
        List of Countries
      </Text>
      <Button title="Go back" onPress={() => props.navigation.pop()} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default DisplayCountries;
