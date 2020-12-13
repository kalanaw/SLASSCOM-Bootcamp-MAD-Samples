import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ComponentScreen = () => {
  return <Text styles={styles.textStyle}>This is the components screen</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  }
});

export default ComponentScreen;