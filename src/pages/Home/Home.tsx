import React from 'react'
import { ScrollView } from 'react-native'

import Address from '../../components/Address/Address'
import Banner from '../../components/Banner/Banner'
import Categories from '../../components/Categories/Categories'

const Home = () => {
  return (
    <ScrollView stickyHeaderIndices={[0]} >
      <Address />
      <Banner />
      <Categories />
    </ScrollView>
  )
}

export default Home