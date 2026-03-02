import Ionicons from "@expo/vector-icons/Ionicons";
import { Avatar } from "@rneui/themed";
import React from "react";
import { Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Topic() {
  return (
    <SafeAreaView className="flex-1 m-2 rounded-lg p-2 bg-white">
      <View className="flex-row border-b border-black h-12 items-center justify-between">
        <Text className="font-bold text-lg">Topic</Text>
        <Text className="text-sm border border-orange-600 font-bold rounded-lg bg-orange px-2 text-orange-600">
          6h left
        </Text>
      </View>
      <View className="mt-4 flex-grow">
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
        <Text className="text-lg font-bold">
          Welcome new members! Introduce yourself
        </Text>
        <Text className="text-md text-gray-600 mt-2">
          Tell us a bit about yourself - where you're from, what you and what
          brings you here
        </Text>
        <View className="flex-row mt-4 gap-2">
          <Text className="text-gray-600"> Admin </Text>
          <View className="flex-row justify-center items-center mx-2">
            <Ionicons size={20} name="chatbox-outline" color="gray" />
            <Text className="text-gray-600"> 41</Text>
          </View>
        </View>
        <View className="mt-4 flex-row items-center justify-between">
          <Text className="text-lg font-bold">Comments (41)</Text>
          <Text className="text-sm">Newest</Text>
        </View>
      </View>
      <View className="flex-row items-center justify-between">
        <Avatar
          avatarStyle={{}}
          containerStyle={{ backgroundColor: "#ea580C" }}
          rounded
          size={25}
          title="A"
          titleStyle={{}}
        />
        <TextInput
          placeholder="Write a comment..."
          className="border-black border rounded-xl w-3/4 p-2"
        ></TextInput>
        <Ionicons
          size={20}
          name="send-outline"
          color="#f54a00"
          className="rounded-full  border-orange-600 p-1"
        />
      </View>
    </SafeAreaView>
  );
}
