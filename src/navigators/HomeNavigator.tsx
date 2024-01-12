import React from 'react'
import { Image, Text, Pressable } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Home from '../pages/Home/Home';
import CategoryDetail from '../pages/CategoryDetail/CategoryDetail';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Stack = createStackNavigator();

const tabHiddenRoutes = ["ProductDetail"];

const HomeNavigator = ({navigation, route}) => {

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "true" } });
    }
  }, [navigation, route]);

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
      <Stack.Screen name='ProductDetail' component={ProductDetail}
              options={{
                headerTintColor: "white",
                headerBackTitleVisible: false,
      
                headerStyle: { backgroundColor: "#5C3EBC" },
                headerLeft: () => (
                  <Pressable
                    onPress={() => navigation.goBack()}
                    style={{ paddingLeft: 8 }}
                  >
                    <Icon
                      style={{ marginLeft: 8 }}
                      name="close"
                      size={26}
                      color="white"
                    />
                  </Pressable>
                ),
                headerTitle: () => (
                  <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
                    Ürün Detayı
                  </Text>
                ),
                headerRight: () => (
                  <Pressable style={{ paddingRight: 10 }}>
                    <Icon
                      style={{ marginRight: 8 }}
                      name="heart"
                      size={26}
                      color="#32177a"
                    />
                  </Pressable>
                ),
              }}
      />
    </Stack.Navigator>
  )
}

export default HomeNavigator
