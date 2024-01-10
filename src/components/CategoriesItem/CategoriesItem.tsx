import { Pressable, Image, Text} from 'react-native'
import React from 'react'

import { Category } from '../../models/Models'
import { useNavigation } from '@react-navigation/native'

import styles from './CategoriesItem.style'

type categoryItemProps={
  item:Category
}

const CategoriesItem = ({item}: categoryItemProps) => {

  const navigation = useNavigation()
  return (
    <Pressable style={styles.container} onPress={() => navigation.navigate("CategoryDetail", {category: item.name})}>
      <Image style={styles.image} source={{uri:item.src}} />
      <Text>{item.name}</Text>
    </Pressable>
  )
}

export default CategoriesItem