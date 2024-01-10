import { View, Text } from 'react-native'
import React from 'react'

import ProductItem from '../ProductItem/ProductItem'
import productsGetir from '../../assets/productsGetir'

import styles from './Products.style.'

const Products = () => {
  return (
    <View>
      <View style={styles.container}>
      {productsGetir.slice(0,2).map((item) => (
                <ProductItem key={item.id} item={item} />
            ))}
      </View>
      <Text style={styles.type}>Çubuk</Text>
      <View style={styles.container2}>
      {productsGetir.slice(2).map((item) => (
                <ProductItem key={item.id} item={item} />
            ))}
      </View>
    </View>
  )
}

export default Products