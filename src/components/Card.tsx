import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { FC } from 'react'
import IProducts from '../../interfaces/IProduct'

interface Props {
  item: IProducts,
  onPress?: () => void
}

const Card: FC<Props> = ({ item: { uri, title, price }, onPress }) => {
  return (
    <Pressable style={styles.page} onPress={onPress}>
      <View style={styles.root}>
        <Image style={styles.image} source={{ uri }} />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>{title}</Text>
          <Text style={styles.price}>Desde ${price}</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default Card

const styles = StyleSheet.create({
  page: {
    padding: 20,
    margin: 'auto',
  },
  root: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    marginHorizontal: 20
  },
  image: {
    width: 170,
    margin: 5,
    height: 150,
    borderRadius: 5,
  },
  rightContainer: {
    width: '50%',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 18,
    width: '90%',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  }
})