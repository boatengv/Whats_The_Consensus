import SimpleLineIcons from "@react-native-vector-icons/simple-line-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#f54a00",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({}) => (
            <SimpleLineIcons name="home" size={25} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="alerts"
        options={{
          title: "Alerts",
          tabBarIcon: ({}) => (
            <SimpleLineIcons name="bell" size={25} color="black" />
          ),
          headerShown: true,
          headerStyle: {
            backgroundColor: "white",
            borderBottomColor: "black",
            borderBottomWidth: 2,
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 24,
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({}) => (
            <SimpleLineIcons name="user" size={25} color="black" />
          ),
          headerShown: true,
          headerStyle: {
            backgroundColor: "white",
            borderBottomColor: "black",
            borderBottomWidth: 2,
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 24,
          },
        }}
      />
      <Tabs.Screen
        name="topic"
        options={{
          title: "Topic",
          href: null,
          tabBarIcon: ({}) => (
            <SimpleLineIcons name="user" size={25} color="black" />
          ),
          headerShown: true,
          headerStyle: {
            backgroundColor: "white",
            borderBottomColor: "black",
            borderBottomWidth: 2,
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 24,
          },
        }}
      />
    </Tabs>
  );
}
