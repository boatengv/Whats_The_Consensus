import { Avatar } from "@rneui/themed";
import React from "react";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View>
      <View>
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
        <Text>User Name </Text>
      </View>
    </View>
  );
}
