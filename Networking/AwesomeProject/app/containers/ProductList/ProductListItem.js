import React from "react";
import { Text, View, Image } from 'react-native';

const ProductListItem = (props) => {
  return (
    <View style={{ flex: 1, flexDirection: 'row', padding: 6 }}>
      <Image
        style={{width: 50,height: 50, margin: 10}}
        source={{
          uri: props.item.imageUrl,
        }}
      />
      <View style={{ flex: 1, padding: 12 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 6 }}>{item.name}</Text>
        <Text style={{ marginBottom: 6 }}>{props.item.description}</Text>
        <Text>Price: {props.item.price} {props.item.currency}</Text>
      </View>
  </View>
  );
};

export default ProductListItem;