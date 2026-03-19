import { View, Text } from "react-native";

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
  return (
    <View className="place-content-evenly justify-center flex-wrap grid grid-cols-3 grid-rows-2">
      <View className="detal">
        <Text>Wiatr {windSpeed} m/s</Text>
      </View>
      <View className="detal">
        <Text>
          Wilgotność
          {humidity} %
        </Text>
      </View>
      <View className="detal">
        <Text>
          Widoczność
          {visibility} km
        </Text>
      </View>
      <View className="detal">
        <Text>
          Ciśnienie
          {pressure} hPa
        </Text>
      </View>
      <View className="detal">
        <Text>
          Zachmurzenie
          {cloudiness} %
        </Text>
      </View>
      <View className="detal">
        <Text>
          Odczuwalna
          {feelsLike}°C
        </Text>
      </View>
    </View>
  );
};

export default WeatherDetails;
