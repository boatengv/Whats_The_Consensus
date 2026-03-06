import { Notification } from "@/components/Notification";
import React from "react";
import { ScrollView, View } from "react-native";

export default function App() {
  return (
    <ScrollView className="bg-white">
      {Array.from({ length: 20 }).map((_, i) => (
        <View key={i}>
          <Notification type={"like"} />
        </View>
      ))}
    </ScrollView>
  );
}
