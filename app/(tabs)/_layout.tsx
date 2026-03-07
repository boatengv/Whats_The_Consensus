<<<<<<< HEAD
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
=======
import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
>>>>>>> parent of b447f13 (Improving the home page, notification page)
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
<<<<<<< HEAD
          tabBarIcon: ({}) => (
            <SimpleLineIcons name="home" size={25} color="black" />
=======
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
>>>>>>> parent of b447f13 (Improving the home page, notification page)
          ),
        }}
      />
      <Tabs.Screen
<<<<<<< HEAD
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
=======
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
>>>>>>> parent of b447f13 (Improving the home page, notification page)
        }}
      />
    </Tabs>
  );
}
