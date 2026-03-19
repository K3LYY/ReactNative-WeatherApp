import { View, Text } from "react-native";

interface ISunTime {
  SunRiseTimeStamp: number;
  SunSetTimeStamp: number;
}

const SunTime = ({ SunRiseTimeStamp, SunSetTimeStamp }: ISunTime) => {
  const SunRiseTime = new Date(SunRiseTimeStamp * 1000).toLocaleTimeString();
  const SunSetTime = new Date(SunSetTimeStamp * 1000).toLocaleTimeString();
  return (
    <View className="block place-content-evenly">
      <View>
        <Text>Wschód: {SunRiseTime}</Text>
      </View>
      <View>
        <Text>Zachód: {SunSetTime}</Text>
      </View>
    </View>
  );
};

export default SunTime;
