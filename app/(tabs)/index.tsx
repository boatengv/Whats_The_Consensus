import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const topic = ["hello"];

  return (
    <SafeAreaView className="flex-1 bg-white">
      {topic.length ? (
        <View className="flex-1 justify-center items-center px-6 gap-3">
          <Ionicons name="chatbox" size={30} color="gray" />
          <Text className="text-orange-600 text-2xl font-bold">
            No active topics
          </Text>
          <Text className="text-lg text-gray-500 mb-6">
            Check back later for new debates to join!
          </Text>
        </View>
      ) : (
        <View>
          <Text>TOPIC 1</Text>
          <Text>TOPIC 2</Text>
        </View>
      )}
    </SafeAreaView>
  );
}
