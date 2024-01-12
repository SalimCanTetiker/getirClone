import { ScrollView } from 'react-native'
import React, {useState} from 'react'

import CategoryFilter from '../../components/CategoryFilter/CategoryFilter'
import TypeFilter from '../../components/TypeFilter/TypeFilter'
import Product from '../../components/Products/Products'


const CategoryDetail = (props) => {
  const [category,setCategory] = useState(props.route.params.category)
  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <CategoryFilter category={category} />
      <TypeFilter />
      <Product/>
    </ScrollView>
  )
}

export default CategoryDetail