import { useState } from "react";
import { View, Text, useColorScheme } from "react-native";
import { Styles } from "@/styles/Styles";

const TimeClock = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime, setTime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };
  setInterval(UpdateTime);
  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? Styles.lightTextColor : Styles.darkTextColor;

  return (
    <View>
      <Text style={[Styles.text, Styles.spacing, themeTextStyle]}>{ctime}</Text>
    </View>
  );
};

export default TimeClock;
