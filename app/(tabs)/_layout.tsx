import React from "react";
import { StyleSheet, View, Dimensions, Platform } from 'react-native';
import { Tabs } from "expo-router";
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


export default function Layout() {
  return (
    <Tabs 
      backBehavior="order"
      screenOptions={{ 
          tabBarActiveTintColor: "#02f2ce",
          tabBarInactiveTintColor: "#6b7280",
          tabBarStyle: {
            backgroundColor: "#ffffff"
          }
      }}>

        <Tabs.Screen
            name="index"
            options={{href: null}}
        />

        <Tabs.Screen name="p-home" options={{
            title: '首页', 
            headerShown: false,
            tabBarIcon: ({ color }) => (
                <FontAwesome6 name="house" size={20} color={color} />
            )
        }}/>

        <Tabs.Screen name="p-daily_learn" options={{
            title: '学习', 
            headerShown: false,
            tabBarIcon: ({ color }) => (
                <FontAwesome6 name="book" size={20} color={color} />
            )
        }}/>

        <Tabs.Screen name="p-daily_train" options={{
            title: '训练', 
            headerShown: false,
            tabBarIcon: ({ color }) => (
                <FontAwesome6 name="dumbbell" size={20} color={color} />
            )
        }}/>

        <Tabs.Screen name="p-health_manage" options={{
            title: '健康', 
            headerShown: false,
            tabBarIcon: ({ color }) => (
                <FontAwesome6 name="heart" size={20} color={color} />
            )
        }}/>

        <Tabs.Screen name="p-data_statistics" options={{
            title: '数据', 
            headerShown: false,
            tabBarIcon: ({ color }) => (
                <FontAwesome6 name="chart-simple" size={20} color={color} />
            )
        }}/>
    </Tabs>
  );
}