import Ionicons from "@expo/vector-icons/Ionicons";
import { Avatar } from "@rneui/themed";
import { BlurView } from "expo-blur";
import { Modal, ScrollView, Text, TextInput, View } from "react-native";
import Comment from "./Comment";
import Reply from "./Reply";

interface CommentSection {
  isVisible: boolean;
  closeCommentSection: Function;
}

export default function CommentSection({
  isVisible,
  closeCommentSection,
}: CommentSection) {
  return (
    <Modal visible={isVisible} transparent={true} animationType={"fade"}>
      <BlurView intensity={10} className="w-full h-full">
        <View className="m-auto w-11/12 h-4/6 bg-white border border-gray-600 rounded-xl">
          <View className="flex-row justify-center items-center py-4 border-b border-black">
            <Text className="text-3xl">Comments (24)</Text>
            <Ionicons
              size={25}
              name="close-outline"
              className="text-xl absolute top-0 right-0 p-2"
              color={"#f54a00"}
              onPress={() => closeCommentSection(false)}
            ></Ionicons>
          </View>
          <ScrollView className="mt-4 p-2">
            <Comment />
            <Reply />
            <Comment />
            <Reply />
            <Comment />

            <Comment />
            <Reply />
            <Reply />

            <Comment />
            <Reply />

            <Comment />
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
      </BlurView>
    </Modal>
  );
}
