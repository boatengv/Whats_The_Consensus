import { InputText } from "@/components/InputText";
import { Link, router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center px-6 gap-2">
        <Text className="text-orange-600 text-4xl font-bold">
          Debate The Topic
        </Text>

        <Text className="text-2xl text-gray-500 mb-6">Welcome back!</Text>

        {/* adjust these to match your InputText prop types */}
        <InputText label="Email" type="email" />
        <InputText label="Password" type="password" />
        <Pressable
          onPress={() => router.push("/(tabs)")}
          className="flex justify-center items-center rounded-xl bg-orange-600 px-4 py-2 w-3/4 h-12 mt-6 mb-2"
        >
          <Text className="text-white text-xl font-bold">Sign In</Text>
        </Pressable>
        <Text>
          Don't have an account?{" "}
          <Link className="text-orange-600 font-bold" href={"/register"}>
            Sign up
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
}
