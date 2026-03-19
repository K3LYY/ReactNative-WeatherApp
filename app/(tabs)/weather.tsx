import TimeClock from "@/components/TimeClock";
import WeatherIcon from "@/components/WeatherIcon";
import WeatherApi from "@/WeatherInstanceApi";
import { useContext, useEffect, useState } from "react";
import { CityContext } from "@/contexts/CityContext";
import SunTime from "@/components/SunTime";
import WeatherDetails from "@/components/WeatherDetails";
import FavouriteButton from "@/components/FavouriteButton";
import { View, Text, useColorScheme } from "react-native";
import { Styles } from "@/styles/Styles";

const WeatherPage = () => {
  const { city, lon, lat, setCityData } = useContext(CityContext);

  const [weatherData, setWeatherData] = useState({
    icon: "10d",
    temperature: 0,
    sunrise: 0,
    sunset: 0,
    windSpeed: 0,
    humidity: 0,
    visibility: 0,
    pressure: 0,
    cloudiness: 0,
    feelsLike: 0,
  });

  const getWeatherData = async () => {
    try {
      const response = await WeatherApi.get(
        `/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=pl`,
      );
      console.log(response);
      setWeatherData({
        icon: response.data.weather[0].icon,
        temperature: response.data.main.temp.toFixed(0),
        sunrise: response.data.sys.sunrise,
        sunset: response.data.sys.sunset,
        windSpeed: response.data.wind.speed,
        humidity: response.data.main.humidity,
        visibility: response.data.visibility,
        pressure: response.data.main.pressure,
        feelsLike: response.data.main.feels_like.toFixed(0),
        cloudiness: response.data.clouds.all,
      });
      if (!city || city != response.data.name) {
        setCityData((prev) => ({ ...prev, city: response.data.name }));
      }
    } catch (error) {
      console.log(error);
    } finally {
      //setLoader(false)
    }
  };
  useEffect(() => {
    getWeatherData();
  }, []);
  const colorScheme = useColorScheme();

  const themeTextStyle =
    colorScheme === "light" ? Styles.lightTextColor : Styles.darkTextColor;
  const themeContainerStyle =
    colorScheme === "light"
      ? Styles.lightContainerColor
      : Styles.darkContainerColor;

  return (
    <View className="page" style={[themeContainerStyle, Styles.container]}>
      <View>
        <Text style={[themeTextStyle, Styles.mainText, Styles.spacing]}>
          {city}
        </Text>
      </View>
      <FavouriteButton />
      <TimeClock />
      <WeatherIcon iconId={weatherData.icon} />
      <Text style={[Styles.mainText, themeTextStyle, Styles.spacing]}>
        {weatherData.temperature}°C
      </Text>
      <SunTime
        SunRiseTimeStamp={weatherData.sunrise}
        SunSetTimeStamp={weatherData.sunset}
      />
      <WeatherDetails
        windSpeed={weatherData.windSpeed}
        cloudiness={weatherData.cloudiness}
        humidity={weatherData.humidity}
        pressure={weatherData.pressure}
        visibility={weatherData.visibility}
        feelsLike={weatherData.feelsLike}
      />
    </View>
  );
};

export default WeatherPage;
