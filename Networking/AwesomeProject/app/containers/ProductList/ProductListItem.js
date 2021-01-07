import { useLinkProps } from "@react-navigation/native";
import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from "./../../styles";

const ProductListItem = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
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
    </TouchableOpacity>
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