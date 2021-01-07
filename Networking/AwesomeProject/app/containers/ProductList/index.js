import React, { useEffect, useState } from 'react';
import { SafeAreaView, ActivityIndicator, FlatList, View, StyleSheet } from 'react-native';
import ProductListItem from "./ProductListItem";

const ProductList = ({ navigation }) => {
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

  const onProductListItemTapped = () => {
    navigation.navigate('ProductDetail');
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={( {item} ) => (<ProductListItem item={item} onPress={onProductListItemTapped}/>)}
        />
      )}
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  separator: {
    height: 1,
    backgroundColor: '#DDD',
  },
});

export default ProductList;