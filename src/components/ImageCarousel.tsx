import { FlatList, StyleSheet, Image, View, useWindowDimensions } from 'react-native'
import React, { FC, useId } from 'react'

interface Props {
  images: string[]
}

const ImageCarousel: FC<Props> = ({ images }) => {
  const windowWidth = useWindowDimensions().width; // 100vw
  const id = useId()
  return (
    <View style={styles.root}>
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <Image key={id} style={[styles.image, { width: windowWidth - 60 }]} source={{ uri: item }} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 40}
        snapToAlignment={"center"}
        decelerationRate={"fast"}
      />
    </View>
  )
}

export default ImageCarousel

const styles = StyleSheet.create({
  root: {
    height: 250,
    margin: 10,
  },
  image: {
    height: 250,
    width: 250,
    margin: 10,
    resizeMode: 'contain',
  }
})