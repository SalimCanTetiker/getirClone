import { View } from 'react-native'
import React, { useState } from 'react'

import categoriesGetir from '../../assets/categoriesGetir';
import CategoriesItem from '../CategoriesItem/CategoriesItem';

import styles from './Categories.style'

const Categories = () => {
  const [categories, setCategories] = useState(categoriesGetir);
  return (
    <View>
      <View style={styles.listContainer}>
        {categories.map((item) => (
          <CategoriesItem key={item.id} item={item}/>
        ))}
      </View>
    </View>
  )
}

export default Categories