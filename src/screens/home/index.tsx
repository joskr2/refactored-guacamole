import { View,Text } from 'react-native'
import React from 'react'
import Card from '../../components/Card'


export default function HomeScreen() {
  return (
    <View>
      <Card title={'Product'} uri={'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'} price={11.22} />
    </View>
  )
}

