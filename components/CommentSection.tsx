import Ionicons from "@expo/vector-icons/Ionicons";
import { Avatar } from "@rneui/themed";
import { Modal, ScrollView, Text, TextInput, View } from "react-native";
import Comment from "./Comment";
import Reply from "./Reply";

interface CommentSection {
  isVisible: boolean;
}

export default function CommentSection({ isVisible }: CommentSection) {
  return (
    <Modal animationType="slide" visible={isVisible} transparent={false}>
      <View className="m-auto w-11/12 h-4/6 bg-white border border-gray-600 rounded-2xl">
        <Text className="text-xl">close</Text>
        <ScrollView className="p-4">
          <Comment />
          <Reply />
          <Comment />
          <Reply />
        </ScrollView>
        <View className="flex-row items-center justify-between border-t border-black p-4">
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
            placeholderTextColor="#A9A9AC"
          ></TextInput>
          <Ionicons
            size={20}
            name="send-outline"
            color="#f54a00"
            className="rounded-full  border-orange-600 p-1"
          />
        </View>
      </View>
    </Modal>
  );
}
