// useEffect

import React, { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const App = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    // This code acts similar to componentDidMount and componentDidUpdate
    const interval = this.setTimeout(() => {
      setCount(count + 1);
    }, 2000);

    return () => { // returned function behaves similar to componentWillUnmount
      clearInterval(this._interval);
    }
  }, [] // passing in an array to second param of useEffect can control behavior at re-rendering
  );

  return (
  <SafeAreaView style={styles.container}>
    <View>
      <Text>
        Count incremented {count} times.
      </Text>
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