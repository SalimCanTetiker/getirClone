import React from 'react'
import { Image, Text, Pressable, View, Dimensions } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Home from '../pages/Home/Home';
import CategoryDetail from '../pages/CategoryDetail/CategoryDetail';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
import Cart from '../pages/Cart/Cart';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Stack = createStackNavigator();

const tabHiddenRoutes = ["ProductDetail", "CartPage"];

const { width } = Dimensions.get("window")

const HomeNavigator = ({ navigation, route }) => {

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
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("CartPage")}
              style={{
                width: width * 0.22,
                height: 33,
                backgroundColor: "white",
                marginRight: width * 0.03,
                borderRadius: 9,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 23, height: 23, marginLeft: 6 }}
                source={require("../../src/assets/cart.png")}
              />
              <View
                style={{ width: 5, height: 30, backgroundColor: "white" }}
              />
              <View
                style={{
                  flex: 1,
                  backgroundColor: "#F3EFFE",
                  height: 30,
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                  justifyContent: 'center', alignItems: 'center'
                }}
              >
                <Text
                  style={{
                    color: "#5D3EBD",
                    fontWeight: "bold",
                    fontSize: 12,
                  }}
                >
                  <Text>{"\u20BA"}</Text>
                  12.00
                </Text>
              </View>
            </Pressable>
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
      <Stack.Screen
        name='CartPage'
        component={Cart}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              Sepetim
            </Text>
          ),
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.goBack()}
              style={{ paddingLeft: 8 }}
            >
              <Icon
                style={{ marginLeft: 4 }}
                name="close"
                size={26}
                color="white"
              />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable style={{ paddingRight: 10 }}>
              <Icon style={{ marginRight: 8 }} name="trash-can" size={24} color="white" />
            </Pressable>
          ),
        }}
      />
    </Stack.Navigator>
  )
}

export default HomeNavigator
