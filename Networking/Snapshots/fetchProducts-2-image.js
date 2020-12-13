// fetchProduts - Image 1

import React, { useEffect, useState } from 'react';
import { SafeAreaView, ActivityIndicator, FlatList, Text, View, Image } from 'react-native';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://6wavrrn6r7.execute-api.us-west-2.amazonaws.com/products')
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setData(json.Items)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View style={{ flex: 1}}>
              <Text>{item.name}</Text>
              <Image
                style={{width: 50,height: 50}}
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
              />
            </View>
          )}
        />
      )}
    </View>
    </SafeAreaView>
  );
};