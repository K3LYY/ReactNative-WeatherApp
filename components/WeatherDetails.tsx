import { View, Text, useColorScheme } from "react-native";
import { Styles } from "@/styles/Styles";

interface IWeatherDetails {
  windSpeed: number;
  humidity: number;
  visibility: number;
  pressure: number;
  cloudiness: number;
  feelsLike: number;
}

const WeatherDetails = ({
  windSpeed,
  humidity,
  visibility,
  pressure,
  cloudiness,
  feelsLike,
}: IWeatherDetails) => {
  const colorScheme = useColorScheme();

  const themeTextStyle =
    colorScheme === "light" ? Styles.lightTextColor : Styles.darkTextColor;
  const themeContainerStyle =
    colorScheme === "light"
      ? Styles.secondLightContainerColor
      : Styles.secondDarkContainerColor;
  const themeBorderStyle =
    colorScheme === "light" ? Styles.lightBorder : Styles.darkBorder;
  return (
    <View
      className="place-content-evenly justify-center flex-wrap grid grid-cols-3 grid-rows-2"
      style={[Styles.container, Styles.spacing]}
    >
      <View style={[themeBorderStyle, Styles.spacing, themeContainerStyle]}>
        <Text style={[themeTextStyle, Styles.smallText]}>
          Wiatr {windSpeed} m/s
        </Text>
      </View>
      <View style={[themeBorderStyle, Styles.spacing, themeContainerStyle]}>
        <Text style={[themeTextStyle, Styles.smallText]}>
          Wilgotność {humidity} %
        </Text>
      </View>
      <View style={[themeBorderStyle, Styles.spacing, themeContainerStyle]}>
        <Text style={[themeTextStyle, Styles.smallText]}>
          Widoczność {visibility} km
        </Text>
      </View>
      <View style={[themeBorderStyle, Styles.spacing, themeContainerStyle]}>
        <Text style={[themeTextStyle, Styles.smallText]}>
          Ciśnienie {pressure} hPa
        </Text>
      </View>
      <View style={[themeBorderStyle, Styles.spacing, themeContainerStyle]}>
        <Text style={[themeTextStyle, Styles.smallText]}>
          Zachmurzenie {cloudiness} %
        </Text>
      </View>
      <View style={[themeBorderStyle, Styles.spacing, themeContainerStyle]}>
        <Text style={[themeTextStyle, Styles.smallText]}>
          Odczuwalna {feelsLike}°C
        </Text>
      </View>
    </View>
  );
};

export default WeatherDetails;
