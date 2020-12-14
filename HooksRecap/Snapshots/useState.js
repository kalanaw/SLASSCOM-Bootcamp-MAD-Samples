// useState to keep a counter variable

import React, { useState } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const App = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
  <SafeAreaView style={styles.container}>
    <View>
      <Text>
        You clicked {count} times.
      </Text>
      <Button
        title="Press me"
        onPress={() => setCount(count + 1)}
      />
    </View>
  </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
});

export default App;


