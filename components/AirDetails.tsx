import { View, Text, useColorScheme, StyleSheet } from "react-native";
import { Styles } from "@/styles/Styles";

interface IAirDetails {
  SO2: number;
  NO2: number;
  PM10: number;
  PM25: number;
  O3: number;
  CO: number;
  system: string;
}

const PollutionColors = StyleSheet.create({
  green: { backgroundColor: "#22c55e" },
  lime: { backgroundColor: "#bef264" },
  amber: { backgroundColor: "#fcd34d" },
  orange: { backgroundColor: "#f97316" },
  red: { backgroundColor: "#dc2626" },
});

const AirDetails = ({ SO2, NO2, PM10, PM25, O3, CO, system }: IAirDetails) => {
  const checkPollution = (unit: number, type: string) => {
    switch (type) {
      case "SO2": {
        if (unit < 20) {
          return PollutionColors.green;
        } else if (unit >= 20 && unit < 80) {
          return PollutionColors.lime;
        } else if (unit >= 80 && unit < 250) {
          return PollutionColors.amber;
        } else if (unit >= 250 && unit < 350) {
          return PollutionColors.orange;
        } else {
          return PollutionColors.red;
        }
      }
      case "NO2": {
        if (unit < 40) {
          return PollutionColors.green;
        } else if (unit >= 40 && unit < 70) {
          return PollutionColors.lime;
        } else if (unit >= 70 && unit < 150) {
          return PollutionColors.amber;
        } else if (unit >= 150 && unit < 200) {
          return PollutionColors.orange;
        } else {
          return PollutionColors.red;
        }
      }
      case "PM10": {
        if (unit < 20) {
          return PollutionColors.green;
        } else if (unit >= 20 && unit < 50) {
          return PollutionColors.lime;
        } else if (unit >= 50 && unit < 100) {
          return PollutionColors.amber;
        } else if (unit >= 100 && unit < 200) {
          return PollutionColors.orange;
        } else {
          return PollutionColors.red;
        }
      }
      case "PM25": {
        if (unit < 10) {
          return PollutionColors.green;
        } else if (unit >= 10 && unit < 25) {
          return PollutionColors.lime;
        } else if (unit >= 25 && unit < 50) {
          return PollutionColors.amber;
        } else if (unit >= 50 && unit < 75) {
          return PollutionColors.orange;
        } else {
          return PollutionColors.red;
        }
      }
      case "O3": {
        if (unit < 60) {
          return PollutionColors.green;
        } else if (unit >= 60 && unit < 100) {
          return PollutionColors.lime;
        } else if (unit >= 100 && unit < 140) {
          return PollutionColors.amber;
        } else if (unit >= 140 && unit < 180) {
          return PollutionColors.orange;
        } else {
          return PollutionColors.red;
        }
      }
      case "CO": {
        if (unit < 4400) {
          return PollutionColors.green;
        } else if (unit >= 4400 && unit < 9400) {
          return PollutionColors.lime;
        } else if (unit >= 9400 && unit < 12400) {
          return PollutionColors.amber;
        } else if (unit >= 12400 && unit < 15400) {
          return PollutionColors.orange;
        } else {
          return PollutionColors.red;
        }
      }
    }
  };
  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? Styles.lightTextColor : Styles.darkTextColor;
  const secondThemeContainerStyle =
    colorScheme === "light"
      ? Styles.secondLightContainerColor
      : Styles.secondDarkContainerColor;
  const themeContainerStyle =
    colorScheme === "light"
      ? Styles.lightContainerColor
      : Styles.darkContainerColor;
  const themeBorderStyle =
    colorScheme === "light" ? Styles.lightBorder : Styles.darkBorder;
  return (
    <View style={[Styles.container, Styles.spacing, Styles.spacing]}>
      <View
        style={[themeBorderStyle, Styles.spacing, checkPollution(SO2, "SO2")]}
      >
        <Text style={[themeTextStyle, Styles.smallText]}>
          {SO2} {system} SO2
        </Text>
      </View>
      <View
        style={[themeBorderStyle, Styles.spacing, checkPollution(NO2, "NO2")]}
      >
        <Text style={[themeTextStyle, Styles.smallText]}>
          {NO2} {system} NO2
        </Text>
      </View>
      <View
        style={[themeBorderStyle, Styles.spacing, checkPollution(PM10, "PM10")]}
      >
        <Text style={[themeTextStyle, Styles.smallText]}>
          {PM10} {system} PM10
        </Text>
      </View>
      <View
        style={[themeBorderStyle, Styles.spacing, checkPollution(PM25, "PM25")]}
      >
        <Text style={[themeTextStyle, Styles.smallText]}>
          {PM25} {system} PM2,5
        </Text>
      </View>
      <View
        style={[themeBorderStyle, Styles.spacing, checkPollution(O3, "O3")]}
      >
        <Text style={[themeTextStyle, Styles.smallText]}>
          {O3} {system} O3
        </Text>
      </View>
      <View
        style={[themeBorderStyle, Styles.spacing, checkPollution(CO, "CO")]}
      >
        <Text style={[themeTextStyle, Styles.smallText]}>
          {CO} {system} CO
        </Text>
      </View>
    </View>
  );
};

export default AirDetails;
