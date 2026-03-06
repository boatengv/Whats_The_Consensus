import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";

export default function PollItem() {
  return (
    <View className="my-2 items-center gap-2 border border-gray-600 flex-row rounded-xl p-2 bg-white">
      <Ionicons
        size={16}
        name="radio-button-off-outline"
        color="#f54a00"
        className=""
      />
      <Text className="text-md text-gray-600 mt-2">
        Commented on What feature should we build next ?
      </Text>
    </View>
  );
}
