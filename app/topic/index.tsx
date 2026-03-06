import Poll from "@/components/Poll";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Avatar } from "@rneui/themed";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import CommentSection from "../../components/CommentSection";

export default function Topic() {
  const [openCommentSection, setOpenCommentSection] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 m-2 rounded-lg p-2 bg-white">
        <View className="flex-row border-b border-black h-12 items-center justify-between">
          <Text className="font-bold text-lg">Topic</Text>
          <Text className="text-sm border border-orange-600 font-bold rounded-lg bg-orange px-2 text-orange-600">
            6h left
          </Text>
        </View>
        <View className="mt-4">
          <View className="flex-row gap-2 items-center mb-4">
            <Avatar
              avatarStyle={{}}
              containerStyle={{ backgroundColor: "#ea580C" }}
              rounded
              size="small"
              title="A"
              titleStyle={{}}
            />
            <Text className="font-bold text-md">Admin</Text>
            <Text className="text-sm">Admin</Text>
          </View>
          <Text className="text-xl font-bold">
            Welcome new members! Introduce yourself ?
          </Text>
          <Text className="text-md text-gray-600 mt-2">
            Tell us a bit about yourself - where you're from, what you and what
            brings you here
          </Text>
          <Poll />
          <View className="flex-row mt-4 gap-1">
            <Text className="text-gray-600"> Admin </Text>
            <View className="flex-row justify-center items-center mx-2">
              <Ionicons size={20} name="chatbox-outline" color="gray" />
              <Text
                className="text-gray-600"
                onPress={() => setOpenCommentSection(true)}
              >
                {" "}
                41
              </Text>
            </View>
          </View>
        </View>
        <CommentSection isVisible={openCommentSection} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
