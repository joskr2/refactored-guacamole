import { View, FlatList } from 'react-native'
import React from 'react'
import Card from '../../components/Card';
import products from '../../../data/products'
import IProducts from '../../../interfaces/IProduct';

export default function HomeScreen({ navigation }) {

  const onNavigate = (items: IProducts) => {
    navigation.navigate('Products', {
      ...items
    })
    console.log(items,"ITEMS desde HOME SCREEN hacia Products Screen ")
  }

  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => <Card item={item} onPress={() => onNavigate(item)} />}
      />
    </View>
  )
}

