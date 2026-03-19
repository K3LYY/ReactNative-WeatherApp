import { View, Text, useColorScheme } from "react-native";
import { Styles } from "@/styles/Styles";

interface ISunTime {
  SunRiseTimeStamp: number;
  SunSetTimeStamp: number;
}

const SunTime = ({ SunRiseTimeStamp, SunSetTimeStamp }: ISunTime) => {
  const SunRiseTime = new Date(SunRiseTimeStamp * 1000).toLocaleTimeString();
  const SunSetTime = new Date(SunSetTimeStamp * 1000).toLocaleTimeString();
  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? Styles.lightTextColor : Styles.darkTextColor;
  return (
    <View>
      <Text style={[themeTextStyle, Styles.smallText]}>
        Wschód: {SunRiseTime}
      </Text>

      <Text style={[themeTextStyle, Styles.smallText]}>
        Zachód: {SunSetTime}
      </Text>
    </View>
  );
};

export default SunTime;
