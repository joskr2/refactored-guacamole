import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { FC, useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import product from '../../../data/product'
import QuantitySelector from '../../components/QuantitySelector'

const ProductScreen: FC = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [quantity, setQuantity] = useState(1);
  return (
    <SafeAreaView >
      <View style={styles.page}>
        <Text style={styles.title}>{product.title}</Text>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, _itemIndex) => setSelectedValue(itemValue)}
        >
          {product.options.map(option => (
            <Picker.Item label={option} value={option} />
          ))}
        </Picker>
        <Text style={styles.price}>
          Desde ${product.price} {" "}
          {product.oldPrice && (<Text style={styles.oldPrice}>${product.oldPrice}</Text>)}
        </Text>
        <Text style={styles.description}>
          {product.description}
        </Text>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </View>
    </SafeAreaView>
  )
}
export default ProductScreen

const styles = StyleSheet.create({
  page: {
    padding: 20,
    margin: 'auto',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',

  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#6e6e6e',
    marginHorizontal: 15,
    fontSize: 15,
  },
  description: {
    marginVertical: 10,
    lineHeight: 20,
  }
})