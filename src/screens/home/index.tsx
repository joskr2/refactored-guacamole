import { View, FlatList } from 'react-native'
import React from 'react'
import Card from '../../components/Card';
import products from '../../products'


export default function HomeScreen() {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => <Card item={item} />}
      />
    </View>
  )
}

