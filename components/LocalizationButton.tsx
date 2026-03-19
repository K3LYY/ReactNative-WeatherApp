import { useContext } from "react";
import { CityContext } from "../contexts/CityContext";
import { useRouter } from "expo-router";
import { Pressable, Text } from "react-native";
import { Styles } from "@/styles/Styles";

const LocalizationButton = () => {
  const { setCityData } = useContext(CityContext);
  const router = useRouter();
  const checkGeoLocalization = () => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setCityData((prev) => ({
        ...prev,
        lon: coords.longitude.toString(),
        lat: coords.latitude.toString(),
      }));
      router.navigate("/(tabs)/weather");
    });
  };
  return (
    <Pressable
      style={[Styles.border, Styles.spacing]}
      onPress={checkGeoLocalization}
    >
      <Text style={Styles.text}>🌐</Text>
    </Pressable>
  );
};

export default LocalizationButton;
