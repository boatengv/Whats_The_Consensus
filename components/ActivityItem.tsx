import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";

export default function ActivityItem() {
  return (
    <View className="m-2 items-center gap-2 border border-gray-600 flex-row rounded-lg p-2 bg-white">
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
  );
}
