import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LoginScreen } from './scr/screens/login';
import { MainScreen } from './scr/screens/main';
import { CartScreen } from './scr/screens/cart';
import { ProductScreen } from './scr/screens/product';
import { ProfileScreen } from './scr/screens/profile';

export default function App() {
  return (
    <LoginScreen />
    //<MainScreen />
    //<CartScreen />
    //<ProductScreen />
    //<ProfileScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
