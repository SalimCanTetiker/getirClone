import { View, Text } from 'react-native'
import React from 'react'

import styles from './DetailBox.style'

type DetailBoxProps = {
    price: number,
    name: string,
    quantity: string
}

const DetailBox = ({ price, name, quantity }: DetailBoxProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.price}>
                <Text>{"\u20BA"}</Text>{price}
            </Text>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.quantity}>{quantity}</Text>
        </View>
    )
}

export default DetailBox