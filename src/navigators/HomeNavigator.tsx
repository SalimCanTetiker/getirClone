import React from 'react'
import { Image, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home/Home';
import CategoryDetail from '../pages/CategoryDetail/CategoryDetail';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home}
        options={{
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Image
              resizeMode="contain"
              style={{ width: 70, height: 30 }}
              source={require("../../src/assets/getirlogo.png")}
            />
          ),
        }}
      />
      <Stack.Screen name='CategoryDetail' component={CategoryDetail}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              Ürünler
            </Text>
          ),
        }}
      />
    </Stack.Navigator>
  )
}

export default HomeNavigator