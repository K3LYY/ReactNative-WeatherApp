import { useRouter } from "expo-router";
import React, { useCallback } from "react";
import { Styles } from "@/styles/Styles";
import CityUserInput from "@/components/CityUserInput";
import { useColorScheme } from "react-native";

import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Pressable,
  Linking,
  Alert,
} from "react-native";
import FavoritesList from "@/components/FavoritesList";

type OpenURLButtonProps = {
  url: string;
  children: string;
};
const OpenURLButton = ({ url, children }: OpenURLButtonProps) => {
  //funckja do otwierania linków w przeglądrce
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);
  return <Button title={children} onPress={handlePress} />;
};

export default function Index() {
  const colorScheme = useColorScheme();

  const themeTextStyle =
    colorScheme === "light" ? Styles.lightTextColor : Styles.darkTextColor;
  const themeContainerStyle =
    colorScheme === "light"
      ? Styles.lightContainerColor
      : Styles.darkContainerColor;
  const router = useRouter();
  return (
    <View style={[themeContainerStyle, Styles.container]}>
      <Text style={[themeTextStyle, Styles.spacing, Styles.mainText]}>
        Sprawdź pogodę w swoim mieście
      </Text>
      <CityUserInput />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Text style={[Styles.smallText, Styles.spacing, themeTextStyle]}>
          Dostawcą danych pogodowych jest:
        </Text>
        <OpenURLButton url="https://openweathermap.org/">
          OpenWeatherMap.org
        </OpenURLButton>
      </View>

      <View>
        {/* miejsce na ulubione miasta */}
        <FavoritesList />
      </View>
    </View>
  );
}
