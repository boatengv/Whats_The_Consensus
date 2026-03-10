import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function VerifyEmail() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center px-6 gap-2">
        <Text className="text-orange-600 text-4xl font-bold">
          Verify Your Email
        </Text>

        <Text className="text-2xl text-gray-500 mb-6">
          Please check your email for a verification code to complete your
          sign-up process.
        </Text>

        <Text className="text-lg text-gray-500 mb-6">
          Didn't receive the email?{" "}
        </Text>
      </View>
    </SafeAreaView>
  );
}
