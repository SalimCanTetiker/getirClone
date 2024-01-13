import { View, Text, Image } from 'react-native'
import React from 'react'

import { Product } from "../../models/Models";

import styles from './CartItem.style';

type CartItemProps = {
    product: Product
};

const CartItem = ({ product }: CartItemProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: product.image }} />
                    <View style={styles.container3}>
                        <View>
                            <Text style={styles.nameText}>{product.name}</Text>
                            <Text style={styles.miktarText}>{product.miktar}</Text>
                        </View>
                        <Text style={styles.fiyatText}>
                            <Text>{"\u20BA"}</Text>
                            {product.fiyatIndirimli}
                        </Text>
                    </View>
                </View>
                <View style={styles.bodyContainer}>
                    <View style={styles.minusContainer}>
                        <Text style={styles.minusText}>-</Text>
                    </View>
                    <View style={styles.quantityContainer}>
                        <Text style={styles.quantityText}>1</Text>
                    </View>
                    <View style={styles.plusContainer}>
                        <Text style={styles.plusText}>+</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CartItem