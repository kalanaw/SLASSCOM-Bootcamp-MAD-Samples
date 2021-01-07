import React, { useEffect, useState } from 'react';
import { SafeAreaView, ActivityIndicator, FlatList, View, Text, StyleSheet } from 'react-native';
import ProductListItem from "./ProductListItem";
import { Context } from "../../Store";
import { useContext } from 'react';

const ProductList = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    fetch('https://6wavrrn6r7.execute-api.us-west-2.amazonaws.com/products')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json.Items);
        dispatch({type: 'SET_PRODUCTS', payload: json.Items});
      })
      .catch((error) => {
        console.error(error);
        dispatch({type: 'SET_ERROR', payload: error});
      })
      .finally(() => setLoading(false));
  }, []);

  const onProductListItemTapped = (item) => {
    console.log(item.id)
    navigation.navigate('ProductDetail', { productId: item.id, otherParam: 'something' });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator/> : (
        <View style={styles.listContainer}>
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={( {item} ) => (<ProductListItem item={item} onPress={() => onProductListItemTapped(item)}/>)}
          />
        </View>
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
  listContainer: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default ProductList;