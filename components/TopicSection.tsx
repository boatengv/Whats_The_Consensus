import { ScrollView, View } from "react-native";
import TopicItem from "./TopicItem";

export default function TopicSection() {
  return (
    <ScrollView className="flex-1">
      {Array.from({ length: 12 }).map((_, i) => (
        <View key={i}>
          <TopicItem />
        </View>
      ))}
    </ScrollView>
  );
}
