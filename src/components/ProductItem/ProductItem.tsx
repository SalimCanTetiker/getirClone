import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Product } from '../../models/Models'

import styles from './ProductItem.style'

type producItemType = {
  item:Product;
}

const PeoductItem = ({item}:producItemType) => {
  return (
    <Pressable style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: item.image}}
      />
      <View style={styles.viewContainer}>
        <Text
          style={styles.priceText}>
          <Text>{"\u20BA"}</Text>{item.fiyat}
        </Text>
        <Text
          style={styles.discounted}>
          <Text>{"\u20BA"}</Text>{item.fiyatIndirimli}
        </Text>
      </View>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.amount}>{item.miktar}</Text>
      <Pressable
        style={styles.iconContainer}>
        <Icon name="plus" size={22} color='#5D3EBD' />
      </Pressable>
    </Pressable>
  )
}

export default PeoductItem