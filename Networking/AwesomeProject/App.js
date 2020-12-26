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
          ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#DDD' }} />}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'row', padding: 6 }}>
              <Image
                style={{width: 50,height: 50, margin: 10}}
                source={{
                  uri: item.imageUrl,
                }}
              />
              <View style={{ flex: 1, padding: 12 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 6 }}>{item.name}</Text>
                <Text style={{ marginBottom: 6 }}>{item.description}</Text>
                <Text>Price: {item.price} {item.currency}</Text>
              </View>
              
            </View>
          )}
        />
      )}
    </View>
    </SafeAreaView>
  );
};