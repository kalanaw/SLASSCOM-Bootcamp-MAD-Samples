import React from "react";
import { Text, View, Image, StyleSheet } from 'react-native';
import { theme } from "./../../styles";

const ProductListItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: item.imageUrl,
        }}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.textName}>{item.name}</Text>
        <Text style={styles.textDescription}>{item.description}</Text>
        <Text style={styles.textPrice}>Price: {item.price} {item.currency}</Text>
      </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 6,
  },
  image: {
    width: 50,
    height: 50,
    margin: 10,
  },
  infoContainer: {
    flex: 1,
    padding: 12,
  },
  textName: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.TITLE_COLOR,
    marginBottom: 6,
  },
  textDescription: {
    marginBottom: 6,
  },
  textPrice: {
    color: theme.PRICE_COLOR,
  }
});


export default ProductListItem;