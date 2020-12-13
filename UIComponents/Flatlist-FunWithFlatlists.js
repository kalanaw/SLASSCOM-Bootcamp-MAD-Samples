// Flatlist - Fun with Flatlists

import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    uri: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    uri: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    uri: 'https://reactnative.dev/img/tiny_logo.png',
  },
];

const Item = ({ item }) => (
  <View style={styles.item}>
    <Image
        style={styles.tinyLogo}
        source={{
          uri: item.uri,
        }}
      />
    <Text style={styles.title}>{item.title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item item={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
  },
  title: {
    fontSize: 32,
  },
  tinyLogo: {
    width: 100,
    height: 100,
  }
});

export default App;