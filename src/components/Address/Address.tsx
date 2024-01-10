import { View, Text } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './Address.style'

const Address = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerOne}>
        <View style={styles.headerOneView}>
          <Text>Teslimat Adresi Belirle</Text>
          <Icon name="chevron-down" size={24} color='#5D3EBD' />
        </View>
      </View>
      <View style={styles.headerTwo}>
        <Text>TVS</Text>
        <Text>10-15 dk</Text>
      </View>
    </View>
  )
}

export default Address