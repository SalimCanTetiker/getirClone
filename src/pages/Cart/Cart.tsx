import { View, FlatList, Pressable, Text, ScrollView } from 'react-native'
import React from 'react'

import productsGetir from '../../assets/productsGetir'
import CartItem from '../../components/CartItem/CartItem'
import ProductItem from '../../components/ProductItem/ProductItem'

import styles from './Cart.style'

const Cart = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{flex: 1}}>
      <FlatList data={productsGetir.slice(4,7)}
        renderItem={({ item }) => <CartItem product={item} />
        }
      />
            <Text style={{padding:15,fontWeight:'bold',color:'#5D3EBD'}}>Önerilen Ürünler</Text>
      <ScrollView style={{backgroundColor:'white'}} showsHorizontalScrollIndicator={false} bounces={true} horizontal={true}>
        {
          productsGetir.map((item) => 
          <ProductItem item={item} />
          )
        }
      </ScrollView>
      </ScrollView>
      <Pressable style={styles.container}>
        <Pressable style={styles.pressContainer}>
          <Text style={styles.buttonText}>Devam</Text>
        </Pressable>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>
            <Text>{"\u20BA"}</Text>
            12.00
          </Text>
        </View>
      </Pressable>
    </View>
  )
}

export default Cart