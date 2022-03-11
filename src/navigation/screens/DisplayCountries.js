import React from 'react';
import {
  RefreshControl,
  Text,
  StyleSheet,
  Button,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {CATEGORIES} from '../data/data';
import CategoryGridTile from '../components/CategoryGridTile';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const DisplayCountries = props => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
      />
    );
  };
  return (
    <SafeAreaView style={styles.screen}>
      <Text
        onPress={() => props.navigate('ScreenOne')}
        style={{fontSize: 26, fontWeight: 'bold'}}>
        List of Countries
      </Text>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={2}
        style={{width: '100%'}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      <Button title="Go back" onPress={() => props.navigation.pop()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DisplayCountries;
