import Ionicons from "@expo/vector-icons/Ionicons";
import { Avatar } from "@rneui/themed";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="items-center">
        <Avatar
          avatarStyle={{}}
          containerStyle={{ backgroundColor: "#BDBDBD" }}
          icon={{}}
          iconStyle={{}}
          imageProps={{}}
          onLongPress={() => alert("onLongPress")}
          onPress={() => alert("onPress")}
          overlayContainerStyle={{}}
          rounded
          size="large"
          source={{ uri: "" }}
          title="P"
          titleStyle={{}}
        />
        <Text className="mt-4 text-2xl font-bold"> Full Name </Text>
        <Text className="mt-2 text-gray-600">@username</Text>
        <Text className="mt-4 w-3/4 text-gray-600 text-center">
          Product enthusiast, coffee lover ☕, building cool things with great
          people.
        </Text>
      </View>
      <View className="flex-row w-full mt-8 px-1 gap-4">
        <View className="gap-2 border border-gray-600  rounded-2xl p-4 w-[116] items-center">
          <Ionicons
            size={15}
            name="chatbox-outline"
            color="#f54a00"
            className=""
          />
          <Text className="font-bold">42</Text>
          <Text className="text-gray-600">COMMENTS</Text>
        </View>
        <View className="gap-2 border border-gray-600 rounded-2xl p-4 w-[116] items-center">
          <Ionicons
            size={15}
            name="stats-chart-outline"
            color="#f54a00"
            className=""
          />
          <Text className="font-bold">18</Text>
          <Text className="text-gray-600">VOTES</Text>
        </View>
        <View className="gap-2 border border-gray-600 rounded-2xl p-4 w-[116] items-center">
          <Ionicons
            size={15}
            name="heart-outline"
            color="#f54a00"
            className=""
          />
          <Text className="font-bold">127</Text>
          <Text className="text-gray-600">LIKES</Text>
        </View>
      </View>
      <View className="mt-8">
        <Text className="m-2 text-xl font-bold">Recent Activity</Text>
        {Array.from({ length: 3 }).map((_, i) => (
          <View
            key={i}
            className="m-2 items-center gap-2 border border-gray-600 flex-row rounded-lg p-2 bg-white"
          >
            <Ionicons
              size={12}
              name="radio-button-off-outline"
              color="#f54a00"
              className=""
            />
            <View className="">
              <Text className="text-md text-gray-600 mt-2">
                Commented on What feature should we build next ?
              </Text>
              <Text className="text-sm bg-orange text-gray-600">6h ago</Text>
            </View>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}
