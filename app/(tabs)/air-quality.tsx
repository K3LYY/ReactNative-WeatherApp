import { useContext, useEffect, useState } from "react";
import WeatherApi from "@/WeatherInstanceApi";
import { CityContext } from "@/contexts/CityContext";
import AirDetails from "@/components/AirDetails";
import { View, Text, useColorScheme, StyleSheet } from "react-native";
import { Styles } from "@/styles/Styles";

const LegendColors = StyleSheet.create({
  green: { backgroundColor: "#22c55e" },
  lime: { backgroundColor: "#bef264" },
  amber: { backgroundColor: "#fcd34d" },
  orange: { backgroundColor: "#f97316" },
  red: { backgroundColor: "#dc2626" },
});

const AirQualityPage = () => {
  const { city, lat, lon } = useContext(CityContext);
  const [airData, setAirData] = useState({
    SO2: 0,
    NO2: 0,
    PM10: 0,
    PM25: 0,
    O3: 0,
    CO: 0,
  });

  const getAirData = async () => {
    try {
      const response = await WeatherApi.get(
        `/data/2.5/air_pollution?lat=${lat}&lon=${lon}`,
      );
      console.log(response);
      setAirData({
        SO2: response.data.list[0].components.so2,
        NO2: response.data.list[0].components.no2,
        PM10: response.data.list[0].components.pm10,
        PM25: response.data.list[0].components.pm2_5,
        O3: response.data.list[0].components.o3,
        CO: response.data.list[0].components.co,
      });
    } catch (e) {
      console.log(e);
    } finally {
    }
  };
  useEffect(() => {
    getAirData();
  }, [city]);
  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? Styles.lightTextColor : Styles.darkTextColor;
  const themeContainerStyle =
    colorScheme === "light"
      ? Styles.lightContainerColor
      : Styles.darkContainerColor;
  return (
    <View style={[Styles.container, themeContainerStyle]}>
      <Text style={[Styles.mainText, themeTextStyle, Styles.spacing]}>
        {city}
      </Text>
      <Text style={[Styles.spacing, themeTextStyle, Styles.text]}>
        Legenda: <Text style={LegendColors.green}>Bardzo dobrze</Text>
        {" - "}
        <Text style={LegendColors.lime}>Dobrze</Text>
        {" - "}
        <Text style={LegendColors.amber}>Średnio</Text>
        {" - "}
        <Text style={LegendColors.orange}>Słabo</Text>
        {" - "}
        <Text style={LegendColors.red}>Źle</Text>
      </Text>
      <AirDetails
        SO2={airData.SO2}
        NO2={airData.NO2}
        PM10={airData.PM10}
        PM25={airData.PM25}
        O3={airData.O3}
        CO={airData.CO}
        system="μg/m3"
      />
    </View>
  );
};

export default AirQualityPage;
