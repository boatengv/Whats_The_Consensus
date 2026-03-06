import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";

export default function NoTopicPage() {
  return (
    <View className="flex-1 justify-center items-center px-6 gap-3">
      <Ionicons name="chatbox" size={30} color="gray" />
      <Text className="text-orange-600 text-2xl font-bold">
        No active topics
      </Text>
      <Text className="text-lg text-gray-500 mb-6">
        Check back later for new debates to join!
      </Text>
    </View>
  );
}
