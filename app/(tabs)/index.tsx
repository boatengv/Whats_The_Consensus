import { MaterialDesignIcons } from "@react-native-vector-icons/material-design-icons";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NoTopicPage from "../../components/NoTopicPage";
import TopicPage from "../../components/TopicPage";

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
      {topic.length ? <TopicPage /> : <NoTopicPage />}
    </SafeAreaView>
  );
}
