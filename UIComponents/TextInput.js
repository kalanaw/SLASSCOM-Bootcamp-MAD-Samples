// TextInput

import React, { Component } from 'react';
import { TextInput, SafeAreaView } from 'react-native';

const UselessTextInput = () => {
  const [value, onChangeText] = React.useState('Useless Placeholder');

  return (
    <SafeAreaView>
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
    </SafeAreaView>
  );
}

export default UselessTextInput;