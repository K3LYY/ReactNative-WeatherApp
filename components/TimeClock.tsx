import { useState } from "react";
import { View, Text } from "react-native";

const TimeClock = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime, setTime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };
  setInterval(UpdateTime);

  return (
    <View>
      <Text>{ctime}</Text>
    </View>
  );
};

export default TimeClock;
