import { useContext, useState } from "react";
import LocalizationButton from "../components/LocalizationButton";
import WeatherApi from "../WeatherInstanceApi";
import { CityContext } from "../contexts/CityContext";
import { useRouter } from "expo-router";
import { Styles } from "@/styles/Styles";
import { View, Pressable, Text, TextInput } from "react-native";

const CityUserInput = () => {
  const [userInput, setUserInput] = useState<string>("");
  const { setCityData } = useContext(CityContext);
  const router = useRouter();

  const getGeoData = async () => {
    //setLoader(true)
    try {
      router.navigate("/(tabs)/weather");
      const response = await WeatherApi.get(`/geo/1.0/direct?q=${userInput}`);
      console.log(response);
      setCityData(() => ({
        city: userInput,
        lon: response.data[0].lon,
        lat: response.data[0].lat,
      }));
    } catch (error) {
      console.log(error);
    } finally {
      //setLoader(false)
    }
  };
  return (
    <View style={[Styles.inputItems, Styles.spacing]}>
      <TextInput
        style={[
          Styles.text,
          Styles.border,
          Styles.spacingInInput,
          Styles.spacing,
        ]}
        placeholder="Wpisz nazwę miasta..."
        value={userInput}
        onChangeText={(text) => setUserInput(text)}
      />
      <Pressable
        style={[Styles.border, Styles.spacingInInput, Styles.spacing]}
        onPress={() => {
          getGeoData();
          console.log("dziala");
        }}
      >
        <Text style={Styles.text}>🔍</Text>
      </Pressable>
      <LocalizationButton />
    </View>
  );
};

export default CityUserInput;
