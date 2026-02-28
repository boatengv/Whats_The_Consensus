import { Notification } from "@/components/Notification";
import { Topic } from "@/components/Topic";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { MaterialDesignIcons } from "@react-native-vector-icons/material-design-icons";
import { SimpleLineIcons } from "@react-native-vector-icons/simple-line-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const topic = ["topic_1"];

  const [openNotifications, setOpenNotification] = useState(false);

  function logout() {
    router.replace("/login");
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
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
        <View>
          <View className="flex-row items-center ml-4">
            <MaterialIcons
              name="arrow-back-ios"
              color="black"
              size={20}
              onPress={() => setOpenNotification(false)}
            />
            <Text className="text-2xl font-bold my-4">Notifications</Text>
          </View>
          <ScrollView className="border-gray-600 border-2 h-5/6 h rounded-xl m-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <View key={i}>
                <Notification type={"like"} />
              </View>
            ))}
          </ScrollView>
        </View>
      ) : topic.length ? (
        <View className="flex-1">
          <View className="flex-row m-4 items-center">
            <Text className="text-xl font-bold">Active Topics</Text>
            <Text className="ml-auto">{topic.length} topic</Text>
          </View>
          <ScrollView className="flex-1">
            {Array.from({ length: 12 }).map((_, i) => (
              <View key={i}>
                <Topic />
              </View>
            ))}
          </ScrollView>
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
