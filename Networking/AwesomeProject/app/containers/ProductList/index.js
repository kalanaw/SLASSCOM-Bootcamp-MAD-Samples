import React, { useEffect, useState } from 'react';
import { SafeAreaView, ActivityIndicator, FlatList, View } from 'react-native';
import ProductListItem from "./ProductListItem";

const ProductList = () => {
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
          renderItem={( {item} ) => (<ProductListItem item={item}/>)}
        />
      )}
    </View>
    </SafeAreaView>
  );
};

export default ProductList;