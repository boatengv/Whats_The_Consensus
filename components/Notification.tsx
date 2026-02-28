import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, View } from "react-native";

type NotificationProps = {
  type: "topic" | "reply" | "like";
};

export function Notification({ type }: NotificationProps) {
  function iconComputed() {
    if (type === "topic") return "book-outline";
    if (type === "like") return "heart-outline";
    if (type === "reply") return "chatbox-outline";
  }

  return (
    <View className="W-full border-b border-gray-600 flex-row items-center p-2 bg-orange-100">
      <View className="w-2/12 items-center">
        <Ionicons
          size={28}
          name={iconComputed()}
          color="#f54a00"
          className="rounded-full p-1 bg-orange-200"
        />
      </View>
      <View className="w-10/12">
        <Text className="text-xl font-bold">
          New topic: Should AI be regulated
        </Text>
        <Text className="text-md mt-[4]" numberOfLines={1}>
          A hot new debate just dropped - share your take
        </Text>
        <Text className="text-sm mt-2">3m ago</Text>
      </View>
    </View>
  );
}
