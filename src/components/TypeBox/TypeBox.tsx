import { Pressable, Text } from 'react-native'
import React from 'react'

import styles from './TypeBox.style'

const TypeBox = ({setCat,active,item}:{setCat:any,active:string,item:string}) => {
  return (
    <Pressable onPress={() => setCat(item)} style={[styles.container,item == active ? {backgroundColor:'#5C3EBC'}:{borderColor:'#F0EFF7',borderWidth:1}]}>
        <Text style={[styles.text,item==active && {color:'white'}]}>{item}</Text>
    </Pressable>
  )
}

export default TypeBox