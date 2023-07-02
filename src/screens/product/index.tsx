import { Text, SafeAreaView, ScrollView } from 'react-native'
import React, { FC, useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import product from '../../../data/product'
import QuantitySelector from '../../components/QuantitySelector'
import styles from './styles'
import Button from '../../components/Button'
import ImageCarousel from '../../components/ImageCarousel'

const ProductScreen: FC = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [quantity, setQuantity] = useState(1);
  
  return (
    <SafeAreaView >
      <ScrollView style={styles.page}>
        <Text style={styles.title}>{product.title}</Text>
        <ImageCarousel images={product.images} />
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
        <Button text={"Agregar"} onPress={() => { }} containerStyles={{ backgroundColor: '#e3c905' }} />
        <Button text={"Comprar"} onPress={() => { }} containerStyles={{ backgroundColor: '#db822a' }} />
      </ScrollView>
    </SafeAreaView>
  )
}
export default ProductScreen
