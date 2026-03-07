import Poll from "@/components/Poll";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Avatar } from "@rneui/themed";
import React, { useState } from "react";
import { Text, View } from "react-native";
import CommentSection from "../../components/CommentSection";

export default function Topic() {
  const [openCommentSection, setOpenCommentSection] = useState(false);

  return (
    <View className="bg-white flex-1 p-2">
      <View className="flex-row gap-2 items-center mt-4">
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
        <Text className="text-sm border border-orange-600 font-bold rounded-lg bg-orange px-2 text-orange-600">
          6h left
        </Text>
      </View>
      <Text className="text-xl font-bold mt-4">
        Welcome new members! Introduce yourself ?
      </Text>
      <Text className="text-md text-gray-600 mt-2">
        Tell us a bit about yourself - where you're from, what you and what
        brings you here
      </Text>
      <Poll />
      <View className="flex-row mt-auto">
        <Text className="text-gray-600"> Posted by Admin </Text>
        <View className="flex-row justify-center items-center mx-2 gap-1">
          <Ionicons size={20} name="chatbox-outline" color="gray" />
          <Text
            className="text-gray-600"
            onPress={() => setOpenCommentSection(true)}
          >
            41
          </Text>
        </View>
      </View>
      <CommentSection
        isVisible={openCommentSection}
        closeCommentSection={setOpenCommentSection}
      />
    </View>
  );
}
