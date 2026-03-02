import { Topic } from "@/components/Topic";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialDesignIcons } from "@react-native-vector-icons/material-design-icons";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const topic = ["topic_1"];

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
          <MaterialDesignIcons
            name="location-exit"
            size={25}
            color="black"
            onPress={logout}
          />
        </View>
      </View>
      {topic.length ? (
        <View className="h-full bg-gray-200">
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
