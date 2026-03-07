import React from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { InputText } from "@/components/InputText";
import { Link, router } from "expo-router";

export default function Register() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center px-6 gap-2">
        <Text className="text-orange-600 text-4xl font-bold">
          Debate The Topic
        </Text>

        <Text className="text-2xl text-gray-500 mb-6">
          Join the conversation
        </Text>

        {/* adjust these to match your InputText prop types */}
        <InputText
          label="Username"
          type="PlainText"
          placeholder="Choose a username"
        />
        <InputText label="Email" type="email" />
        <InputText label="Password" type="password" />
        <Pressable
          onPress={() => router.replace("/(tabs)")}
          className="flex justify-center items-center rounded-xl bg-orange-600 px-4 py-2 w-3/4 h-12 mt-6 mb-2"
        >
          <Text className="text-white text-xl font-bold">Create Account</Text>
        </Pressable>
        <Text>
          Don't have an account?{" "}
          <Link className="text-orange-600 font-bold" href={"/login"}>
            Sign in
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
}
