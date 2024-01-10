import React from 'react'
import { Pressable } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const Tab = createBottomTabNavigator();

const RootNavigator = () => {

    const CustomTabBarButton = () => {
        return (
            <Pressable style={{
                borderColor: "white",
                borderWidth: 2,
                borderRadius: 32,
                justifyContent: "center",
                marginTop: -8,
                alignItems: "center",
                backgroundColor: "#5C3EBC",
                width: 55,
                height: 55,
            }}>
                <Icon name="view-list" size={32} color="#FFD00C" />
            </Pressable>
        )
    }
    return (
        <Tab.Navigator
            initialRouteName="AnaSayfa"
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#5C3EBC",
                tabBarInactiveTintColor: "#959595",
                headerShown: false,
                tabBarStyle: {
                    height: 80,
                },
            }}
        >
            <Tab.Screen name='Anasayfa' component={HomeNavigator} options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="home" size={24} color={color} />
                )
            }} />
            <Tab.Screen name='Search' component={HomeNavigator} options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="magnify" size={24} color={color} />
                )
            }} />
            <Tab.Screen
                name="List"
                component={HomeNavigator}
                options={{
                    tabBarButton: (props) => <CustomTabBarButton {...props} />,
                }}
            />
            <Tab.Screen name='Profile' component={HomeNavigator} options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="account" size={24} color={color} />
                )
            }} />
            <Tab.Screen name='Gift' component={HomeNavigator} options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="gift" size={24} color={color} />
                )
            }} />
        </Tab.Navigator>
    )
}

export default RootNavigator