import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { MaterialDesignIcons } from "@react-native-vector-icons/material-design-icons";
import { SimpleLineIcons } from "@react-native-vector-icons/simple-line-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const topic = [];
  const notifications = [
    { title: "notification", data: ["NOT_1", "NOT_2", "NOT_3"] },
  ];
  const [openNotifications, setOpenNotification] = useState(false);

  function logout() {
    router.replace("/login");
  }

  return (
    <SafeAreaView className="h-full bg-white">
      <View className="flex-row border-b-2 border-black h-12 items-center">
        <View className="flex-1">
          <Text className="ml-4 text-orange-600 font-bold text-lg">
            What's The Consensus
          </Text>
        </View>
        <View className="flex-row gap-4 mr-4">
          <SimpleLineIcons
            name="bell"
            size={25}
            color="black"
            onPress={() => setOpenNotification(true)}
          />
          <MaterialDesignIcons
            name="location-exit"
            size={25}
            color="black"
            onPress={logout}
          />
        </View>
      </View>
      {openNotifications ? (
        <View className="flex-row mt-4 ml-4">
          <MaterialIcons
            name="arrow-back-ios"
            color="black"
            size={30}
            onPress={() => setOpenNotification(false)}
          />
          <Text className="text-4xl font-bold">Notifications</Text>
        </View>
      ) : topic.length ? (
        <View>
          <Text>TOPIC 1</Text>
          <Text>TOPIC 2</Text>
        </View>
      ) : (
        <View className="flex-1 justify-center items-center px-6 gap-3">
          <Ionicons name="chatbox" size={30} color="gray" />
          <Text className="text-orange-600 text-2xl font-bold">
            No active topics
          </Text>
          <Text className="text-lg text-gray-500 mb-6">
            Check back later for new debates to join!
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}
