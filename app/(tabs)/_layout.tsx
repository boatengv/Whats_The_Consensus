import SimpleLineIcons from "@react-native-vector-icons/simple-line-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        headerShown: false,
        tabBarInactiveBackgroundColor: "white",
        tabBarActiveBackgroundColor: "white",
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
        }}
      />
    </Tabs>
  );
}
