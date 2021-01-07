// fetchProducts - Little styling for product list

import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Store from './app/Store';
import ProductList from "./app/containers/ProductList";
import ProductDetail from "./app/containers/ProductDetail";

const Stack = createStackNavigator();

export default App = () => {
  return (
    <Store>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ProductList">
          <Stack.Screen name="ProductList" component={ProductList} options={{ title: 'Product List'}}/>
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Store>
  );
};