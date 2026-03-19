import { useContext, useEffect, useState } from "react";
import WeatherApi from "@/WeatherInstanceApi";
import { CityContext } from "@/contexts/CityContext";
import AirDetails from "@/components/AirDetails";
import { View, Text } from "react-native";
import { Styles } from "@/styles/Styles";

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
  }, []);
  return (
    <View className="page" style={Styles.container}>
      <Text>AirQualityPage</Text>
      <Text>{city}</Text>
      <Text>
        Legenda: <Text className="bg-green-500">Bardzo dobrze</Text>
        {" - "}
        <Text className="bg-lime-300">Dobrze</Text>
        {" - "}
        <Text className="bg-amber-300">Średnio</Text>
        {" - "}
        <Text className="bg-orange-500">Słabo</Text>
        {" - "}
        <Text className="bg-red-600">Źle</Text>
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
