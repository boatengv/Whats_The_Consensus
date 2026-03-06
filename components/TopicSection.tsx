import { ScrollView, View } from "react-native";
import { Topic } from "./Topic";

export default function TopicSection() {
  return (
    <ScrollView className="flex-1">
      {Array.from({ length: 12 }).map((_, i) => (
        <View key={i}>
          <Topic />
        </View>
      ))}
    </ScrollView>
  );
}
