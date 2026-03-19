import { useContext } from "react";
import { CityContext } from "../contexts/CityContext";
import { useRouter } from "expo-router";
import { Pressable, Text, Alert, useColorScheme } from "react-native";
import { Styles } from "@/styles/Styles";
import * as Location from "expo-location";

const LocalizationButton = () => {
  const { setCityData } = useContext(CityContext);
  const router = useRouter();
  const createThreeButtonAlert = () =>
    Alert.alert("Lokalizacja", "Nie udzialono dostępu", [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed"),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const checkGeoLocalization = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        createThreeButtonAlert();
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      setCityData((prev) => ({
        ...prev,
        lon: longitude.toString(),
        lat: latitude.toString(),
      }));

      router.navigate("/(tabs)/weather");
    } catch (error) {
      console.error("Failed to get geolocation:", error);
      createThreeButtonAlert();
    }
  };
  const colorScheme = useColorScheme();

  const themeContainerStyle =
    colorScheme === "light"
      ? Styles.secondLightContainerColor
      : Styles.secondDarkContainerColor;
  const themeBorderStyle =
    colorScheme === "light" ? Styles.lightBorder : Styles.darkBorder;
  return (
    <Pressable
      style={[themeBorderStyle, Styles.spacing, themeContainerStyle]}
      onPress={checkGeoLocalization}
    >
      <Text style={Styles.text}>🌐</Text>
    </Pressable>
  );
};

export default LocalizationButton;
