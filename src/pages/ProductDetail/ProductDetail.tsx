import { ScrollView, ActivityIndicator, View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'

import { Product } from '../../models/Models'
import ProductImages from '../../components/ProductImages/ProductImages'
import DetailBox from '../../components/DetailBox/DetailBox'
import DetailProperty from '../../components/DetailProperty/DetailProperty'
import CartButton from '../../components/CartButton/CartButton'

const ProductDetail = (props) => {

  const [product, setProduct] = useState<Product>()
  useEffect(() => {
    setProduct(props.route.params.product)
  }, [])

  if (!product) {
    return <ActivityIndicator color={"#5D3EBD"} />
  }

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <ProductImages images={product.images} />
        <DetailBox price={product.fiyat} name={product.name} quantity={product.miktar} />
        <Text style={{ paddingHorizontal: 10, paddingVertical: 13, color: '#808B99', fontWeight: '600', fontSize: 14 }}>
          Detaylar
        </Text>
        <DetailProperty />
      </ScrollView>
      <CartButton />
    </View>
  )
}

export default ProductDetail