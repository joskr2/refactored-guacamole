import { SafeAreaView, View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/home'
import ProductScreen from './src/screens/product'

export default function App() {
  return (
    <SafeAreaView>
      {/* <HomeScreen /> */}
      <ProductScreen />
    </SafeAreaView>
  )
}
