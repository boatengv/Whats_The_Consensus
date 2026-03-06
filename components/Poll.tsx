import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";
import PollItem from "./PollItem";

export default function Poll() {
  return (
    <View className="mt-8 border border-orange-600 rounded-xl p-4">
      <View className="flex-row gap-2">
        <Ionicons
          size={15}
          name="stats-chart-outline"
          color="#f54a00"
          className=""
        />
        <Text className="font-bold  text-md">Poll - Single Choice </Text>
      </View>
      <Text className="text-gray-600 my-4">
        Results visible after topic expires
      </Text>
      {Array.from({ length: 4 }).map((_, i) => (
        <View key={i}>
          <PollItem />
        </View>
      ))}
      <Text className="text-orange-600 font-bold mt-4">
        Note: You can only vote once [Please take your time when deciding]
      </Text>
    </View>
  );
}
