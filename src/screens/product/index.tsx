import { Text, SafeAreaView, ScrollView } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import product from '../../../data/product'
import QuantitySelector from '../../components/QuantitySelector'
import styles from './styles'
import Button from '../../components/Button'
import ImageCarousel from '../../components/ImageCarousel'
import useFetch from '../../../hooks/useFetch'

const ProductScreen: FC = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [data,setData] = useState(product[0])

  return (
    <SafeAreaView >
      <ScrollView style={styles.page}>
        <Text style={styles.title}>{data?.title}</Text>
        <ImageCarousel images={data?.images} />
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, _itemIndex) => setSelectedValue(itemValue)}
        >
          {data?.options?.map((option,index) => (
            <Picker.Item key={index} label={option} value={option} />
          ))}
        </Picker>
        <Text style={styles.price}>
          Desde ${data?.price} {" "}
          {data?.oldPrice && (<Text style={styles.oldPrice}>${data?.oldPrice}</Text>)}
        </Text>
        <Text style={styles.description}>
          {data?.description}
        </Text>
        <Text style={styles.description}>
          {data?.description}
        </Text>
        <Text style={styles.description}>
          {data?.description}
        </Text>
        <Text style={styles.description}>
          {data?.description}
        </Text>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <Button text={"Agregar"} onPress={() => { }} containerStyles={{ backgroundColor: '#e3c905' }} />
        <Button text={"Comprar"} onPress={() => { }} containerStyles={{ backgroundColor: '#db822a' }} />
      </ScrollView>
    </SafeAreaView>
  )
}
export default ProductScreen
