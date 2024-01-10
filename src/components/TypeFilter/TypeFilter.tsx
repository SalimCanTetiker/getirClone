import { ScrollView } from 'react-native'
import React, {useState} from 'react'

import TypeBox from '../TypeBox/TypeBox'

import styles from './TypeFilter.style'


const TypeFilter = () => {

    const [category,setCategory] = useState("Birlikte İyi Gider")

    return (
        <ScrollView style={styles.container} showsHorizontalScrollIndicator={false} bounces={true} horizontal={true}>
            {["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"].map((item) => (
                <TypeBox key={item} setCat={setCategory} item={item} active={category}  />
            ))
            }
        </ScrollView>
    )
}

export default TypeFilter