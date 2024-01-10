import { View, Text } from 'react-native'
import React from 'react'

import styles from './CategoryBox.style'

const CategoryBox = ({active,item}:{active:string,item:string}) => {
    return (
        <View style={[styles.container, item == active && { borderBottomColor: "#FFD00C", borderBottomWidth: 3 }]}>
            <Text style={styles.text}>{item}</Text>
        </View>
    )
}

export default CategoryBox