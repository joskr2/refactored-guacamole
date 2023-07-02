import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { FC } from 'react'

interface QuantitySelectorProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>
}

const QuantitySelector: FC<QuantitySelectorProps> = ({ quantity = 0, setQuantity }) => {

  const onMinus = () => {
    setQuantity(Math.max(0, quantity - 1))
  }

  const onPlus = () => {
    setQuantity(quantity + 1)
  }

  return (
    <View style={styles.root}>
      <Pressable onPress={onMinus} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
      <Text style={styles.quantity}>{quantity}</Text>
      <Pressable onPress={onPlus} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  )
}

export default QuantitySelector

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e3e3e3',
    width: 130,
    justifyContent: 'space-between',
  },
  button: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d1d1d1',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
  },
  quantity: {
    color: '#007eb9',
  }
})