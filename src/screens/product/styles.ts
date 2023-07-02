
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  page: {
    padding: 20,
    margin: 'auto',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',

  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#6e6e6e',
    marginHorizontal: 15,
    fontSize: 15,
  },
  description: {
    marginVertical: 10,
    lineHeight: 20,
  }
})


export default styles;