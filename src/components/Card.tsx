import { StyleSheet, Text, View, Image } from 'react-native'
import React, { FC } from 'react'


interface IProducts {
  id?: string,
  title: string,
  avgRating?: number,
  ratings?: number,
  price: number,
  oldPrice?: number,
  uri: string,
}
interface Props {
  item: IProducts
}

const Card: FC<Props> = ({ item: { uri, title, price } }) => {
  return (
    <View style={styles.page}>
      <View style={styles.root}>
        <Image style={styles.image} source={{ uri }} />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>{title}</Text>
          <Text style={styles.price}>Desde ${price}</Text>
        </View>
      </View>
    </View>
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
    width: '60%',
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