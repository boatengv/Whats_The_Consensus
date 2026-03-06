import Ionicons from "@expo/vector-icons/Ionicons";
import { Avatar } from "@rneui/themed";
import React, { useState } from "react";
import { Modal, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Topic() {
  const [openCommentModal, setCommentModal] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 m-2 rounded-lg p-2 bg-white">
        <View className="flex-row border-b border-black h-12 items-center justify-between">
          <Text className="font-bold text-lg">Topic</Text>
          <Text className="text-sm border border-orange-600 font-bold rounded-lg bg-orange px-2 text-orange-600">
            6h left
          </Text>
        </View>
        <View className="mt-4">
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
          <Text className="text-xl font-bold">
            Welcome new members! Introduce yourself ?
          </Text>
          <Text className="text-md text-gray-600 mt-2">
            Tell us a bit about yourself - where you're from, what you and what
            brings you here
          </Text>
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
              <View
                key={i}
                className="my-2 items-center gap-2 border border-gray-600 flex-row rounded-xl p-2 bg-white"
              >
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
            ))}
            <Text className="text-orange-600 font-bold mt-4">
              Note: You can only vote once [Please take your time when deciding]
            </Text>
          </View>
          <View className="flex-row mt-4 gap-1">
            <Text className="text-gray-600"> Admin </Text>
            <View className="flex-row justify-center items-center mx-2">
              <Ionicons size={20} name="chatbox-outline" color="gray" />
              <Text
                className="text-gray-600"
                onPress={() => setCommentModal(true)}
              >
                {" "}
                41
              </Text>
            </View>
          </View>
          {/* <View className="mt-4 flex-row items-center justify-between">
          <Text className="text-lg font-bold">Comments (41)</Text>
          <Text className="text-sm">Newest</Text>
        </View> */}
        </View>
        <Modal
          animationType="slide"
          visible={openCommentModal}
          transparent={false}
        >
          <View className="m-auto w-11/12 h-4/6 bg-white border border-gray-600 rounded-2xl">
            <Text className="text-xl" onPress={() => setCommentModal(false)}>
              close
            </Text>
            <ScrollView className="p-4">
              <View className="flex-row gap-2 mb-6">
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
                <View className="border-black flex-1">
                  <View className="flex-row gap-2 items-center">
                    <Text className="font-bold">Full Name</Text>
                    <Text className="text-gray-600 text-sm">2h ago</Text>
                  </View>
                  <Text className="mt-2 text-sm">
                    I'd love to see better notification controls! Sometimes I
                    miss important updates.
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
                    I'd love to see better notification controls! Sometimes I
                    miss important updates.
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
                    I'd love to see better notification controls! Sometimes I
                    miss important updates.
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
                    I'd love to see better notification controls! Sometimes I
                    miss important updates.
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
                    I'd love to see better notification controls! Sometimes I
                    miss important updates.
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
              <View className="flex-row gap-2 mb-6">
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
                <View className="border-black flex-1">
                  <View className="flex-row gap-2 items-center">
                    <Text className="font-bold">Full Name</Text>
                    <Text className="text-gray-600 text-sm">2h ago</Text>
                  </View>
                  <Text className="mt-2 text-sm">
                    I'd love to see better notification controls! Sometimes I
                    miss important updates.
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
                    I'd love to see better notification controls! Sometimes I
                    miss important updates.
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
                    I'd love to see better notification controls! Sometimes I
                    miss important updates.
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
              <View className="flex-row gap-2 mb-6">
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
                <View className="border-black flex-1">
                  <View className="flex-row gap-2 items-center">
                    <Text className="font-bold">Full Name</Text>
                    <Text className="text-gray-600 text-sm">2h ago</Text>
                  </View>
                  <Text className="mt-2 text-sm">
                    I'd love to see better notification controls! Sometimes I
                    miss important updates.
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
              <View className="flex-row gap-2 mb-6">
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
                <View className="border-black flex-1">
                  <View className="flex-row gap-2 items-center">
                    <Text className="font-bold">Full Name</Text>
                    <Text className="text-gray-600 text-sm">2h ago</Text>
                  </View>
                  <Text className="mt-2 text-sm">
                    I'd love to see better notification controls! Sometimes I
                    miss important updates.
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
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
