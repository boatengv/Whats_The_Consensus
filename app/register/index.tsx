import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { InputText } from "@/components/InputText";

export default function Register() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center px-6 gap-3">
        <Text className="text-orange-600 text-2xl font-bold">
          Debate The Topic
        </Text>

        <Text className="text-lg text-gray-500 mb-6">Welcome back!</Text>

        {/* adjust these to match your InputText prop types */}
        <InputText label="Email" type="email" />
        <InputText label="Password" type="password" />
      </View>
    </SafeAreaView>
  );
}
