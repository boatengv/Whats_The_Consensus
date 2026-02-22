import { Text, TextInput, View } from "react-native";

type InputTextProps = {
  label?: string;
  type: "password" | "email" | "PlainText";
};

export function InputText({ label, type }: InputTextProps) {
  function textInputPlaceholderComputed() {
    if (type === "password") return "*********";
    if (type === "email") return "you@example.com";
    return "";
  }

  function textLabelPlaceholderComputed() {
    if (type === "password") return "Password";
    if (type === "email") return "Email";
    return label;
  }

  return (
    <View className="w-3/4 mb-2">
      <Text className="text-xl mb-2">{textLabelPlaceholderComputed()}</Text>
      <TextInput
        className="border-gray-600 rounded-md border h-8"
        placeholder={textInputPlaceholderComputed()}
      />
    </View>
  );
}
