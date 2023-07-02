import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { FC, useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import product from '../../../data/product'

const ProductScreen: FC = () => {
  const [selectedValue, setSelectedValue] = useState("")
  return (
    <SafeAreaView >
      <View style={styles.page}>
        <Text>{product.title}</Text>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, _itemIndex) => setSelectedValue(itemValue)}
        >
          {product.options.map(option => (
            <Picker.Item label={option} value={option} />
          ))}
        </Picker>
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
})