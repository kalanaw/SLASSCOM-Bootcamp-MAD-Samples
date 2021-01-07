import React, { useContext } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native';
import { Context } from "../../Store";
import { theme } from "./../../styles";

const ProductDetail = ({ route }) => {
  const [state, dispatch] = useContext(Context);
  const { productId, otherParam } = route.params;

  const products = state.products;
  const product = products.find((product)=> { return product.id == productId });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: product.imageUrl,
            }}
          />
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.textTitle}>{product.name}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  imageContainer: {
    flex: 1,
  },
  detailContainer: {
    flex: 1,
    padding: 10,
  },
  image: {
    flex: 1,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.TITLE_COLOR,
  }
});

export default ProductDetail;