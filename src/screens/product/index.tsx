import { Text, SafeAreaView, ScrollView } from 'react-native'
import React, { FC, useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import QuantitySelector from '../../components/QuantitySelector'
import styles from './styles'
import Button from '../../components/Button'
import ImageCarousel from '../../components/ImageCarousel'
import IProducts from '../../../interfaces/IProduct';

interface Props {
  route: {
    params: IProducts
  }
}

const ProductScreen: FC<Props> = ({
  route: {
    params: {
      title,
      description,
      price,
      oldPrice,
      images,
      options
    }
  }
}) => {

  const [selectedValue, setSelectedValue] = useState("");
  const [quantity, setQuantity] = useState(1);

  return (
    <SafeAreaView >
      <ScrollView style={styles.page}>
        <Text style={styles.title}>{title}</Text>
        <ImageCarousel images={images} />
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, _itemIndex) => setSelectedValue(itemValue)}
        >
          {options?.map((option, index) => (
            <Picker.Item key={index} label={option} value={option} />
          ))}
        </Picker>
        <Text style={styles.price}>
          Desde ${price} {" "}
          {oldPrice && (<Text style={styles.oldPrice}>${oldPrice}</Text>)}
        </Text>
        <Text style={styles.description}>
          {description}
        </Text>
        <Text style={styles.description}>
          {description}
        </Text>
        <Text style={styles.description}>
          {description}
        </Text>
        <Text style={styles.description}>
          {description}
        </Text>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <Button text={"Agregar"} onPress={() => { }} containerStyles={{ backgroundColor: '#e3c905' }} />
        <Button text={"Comprar"} onPress={() => { }} containerStyles={{ backgroundColor: '#db822a' }} />
      </ScrollView>
    </SafeAreaView>
  )
}
export default ProductScreen
