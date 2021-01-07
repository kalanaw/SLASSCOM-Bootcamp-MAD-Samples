// Product details 2

import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { theme } from "./../../styles";

const ProductDetail = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.imageContainer}></View>
        <View style={styles.detailContainer}></View>
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
    backgroundColor: 'red',
  },
  detailContainer: {
    flex: 1,
    backgroundColor: 'blue',
  }
});

export default ProductDetail;