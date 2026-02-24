import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, TextInput, View } from "react-native";

type InputTextProps = {
  label?: string;
  type: "password" | "email" | "PlainText";
  placeholder?: string;
};

type IoniconName = React.ComponentProps<typeof Ionicons>["name"];

export function InputText({ label, type, placeholder }: InputTextProps) {
  function textInputPlaceholderComputed() {
    if (type === "password") return "*********";
    if (type === "email") return "you@example.com";
    return placeholder;
  }

  function textLabelComputed() {
    if (type === "password") return "Password";
    if (type === "email") return "Email";
    return label;
  }

  function iconComputed(): IoniconName {
    if (type === "password") return "lock-closed-outline";
    if (type === "email") return "mail-outline";
    return "pencil-outline";
  }

  return (
    <View className="w-3/4 mb-2">
      <Text className="text-xl mb-2">{textLabelComputed()}</Text>
      <View className="flex-row items-center w-full border-gray-600 rounded-md border">
        <Ionicons
          name={iconComputed()}
          size={20}
          color="#ea580c"
          className="mx-2"
        />
        <TextInput
          className="h-8"
          placeholder={textInputPlaceholderComputed()}
          placeholderTextColor="#A9A9AC"
        />
      </View>
    </View>
  );
}
