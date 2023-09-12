import { FlatList, StyleSheet, Image, View, useWindowDimensions } from 'react-native'
import { FC, useCallback, useState, useRef } from 'react'
import React from 'react';

interface Props {
  images: string[]
}

const ImageCarousel: FC<Props> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const windowWidth = useWindowDimensions().width; // 100vw
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 })

  const onFlatListUpdate = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  }, []);

  return (
    <View style={styles.root}>
      <FlatList
        data={images}
        renderItem={({ item, index }) => (
          <Image key={index} style={[styles.image, { width: windowWidth - 60 }]} source={{ uri: item }} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 40}
        snapToAlignment={"center"}
        decelerationRate={"fast"}
        viewabilityConfig={
          viewConfigRef.current
        }
        keyExtractor={(_, index) => index.toString()}
        onViewableItemsChanged={onFlatListUpdate}
      />
      <View style={styles.dotContainer}>
        {
          images.map((_image, index) => (<View key={index} style={[styles.dot, {
            backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed'
          }]} />))
        }
      </View>
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
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 25,
    backgroundColor: '#c9c9c9',
    margin: 5,
  },
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
})