import { ScrollView } from 'react-native'
import React, { useState } from 'react'

import categoriesGetir from '../../assets/categoriesGetir'
import CategoryBox from '../CategoryBox/CategoryBox'

import styles from './CategoryFilter.style'

const CategoryFilter = ({category}:{category:string}) => {
    const [categories, setCategories] = useState(categoriesGetir)
  return (
    <ScrollView style={styles.container} showsHorizontalScrollIndicator={false} bounces={true} horizontal={true}>
        {
            categories.map((item) => (
                <CategoryBox key={item.id} item={item.name} active={category} />
            ))
        }
    </ScrollView>
  )
}

export default CategoryFilter