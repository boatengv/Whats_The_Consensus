import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

export function Topic() {
  function openTopic() {
    router.replace("/topic");
  }

  return (
    <Pressable onPress={openTopic}>
      <View className="m-2 border border-gray-600 flex-row rounded-lg p-2 bg-white">
        <View className="w-full">
          <Text className="text-lg font-bold">
            Welcome new members! Introduce yourself
          </Text>
          <Text className="text-md text-gray-600 mt-2">
            Tell us a bit about yourself - where you're from, what you and what
            brings you here
          </Text>
          <View className="flex-row mt-4 gap-2">
            <Text className="text-gray-600"> Admin </Text>
            <Text className="text-sm border border-orange-600 font-bold rounded-lg bg-orange px-2 text-orange-600">
              6h left
            </Text>
            <View className="flex-row justify-center items-center mx-2">
              <Ionicons size={20} name="chatbox-outline" color="gray" />
              <Text className="text-gray-600"> 41</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
