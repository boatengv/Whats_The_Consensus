import Ionicons from "@expo/vector-icons/Ionicons";
import { Avatar } from "@rneui/base";
import { Text, View } from "react-native";

export default function Reply() {
  return (
    <View className="flex-row gap-2 mb-4 ml-8">
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
        size={20}
        source={{ uri: "" }}
        title="F"
        titleStyle={{}}
      />
      <View className="flex-1">
        <View className="flex-row gap-2 items-center">
          <Text className="font-bold">Full Name</Text>
          <Text className="text-gray-600 text-sm">2h ago</Text>
        </View>
        <Text className="mt-2 text-sm border-black">
          I'd love to see better notification controls! Sometimes I miss
          important updates.
        </Text>
        <View className="flex-row items-center mt-2 gap-2">
          <View className="flex-row items-center">
            <Ionicons
              size={15}
              name="heart-outline"
              color="black"
              className=""
            />
            <Text className="text-sm">2</Text>
          </View>
          <Text className="text-gray-600 text-sm">Reply</Text>
        </View>
      </View>
    </View>
  );
}
