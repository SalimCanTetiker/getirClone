import { View, Text, Pressable } from 'react-native'
import React from 'react'

import styles from './CartButton.style'

const CartButton = () => {
  return (
    <Pressable style={styles.container}>
        <View style={styles.viewContainer} >
            <Text style={styles.text}>Sepete Ekle</Text>
        </View>
    </Pressable>
  )
}

export default CartButton