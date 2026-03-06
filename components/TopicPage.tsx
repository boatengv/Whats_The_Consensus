import TopicSection from "@/components/TopicSection";
import { Text, View } from "react-native";

export default function TopicPage() {
  return (
    <View className="h-full bg-gray-100">
      <View className="flex-row m-4 items-center">
        <Text className="text-xl font-bold">Active Topics</Text>
        <Text className="ml-auto">{1} topic</Text>
      </View>
      <TopicSection />
    </View>
  );
}
