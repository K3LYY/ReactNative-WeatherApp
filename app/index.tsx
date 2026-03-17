import React, { useCallback } from "react";
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
  return (
    <View style={Styles.container}>
      <Text style={[Styles.mainText, Styles.spacing]}>
        Sprawdź pogodę w swoim mieście
      </Text>
      <View style={[Styles.inputItems, Styles.spacing]}>
        <TextInput
          style={[
            Styles.text,
            Styles.border,
            Styles.spacingInInput,
            Styles.spacing,
          ]}
          placeholder="Wpisz nazwę miasta..."
        />
        <Pressable
          style={[Styles.border, Styles.spacingInInput, Styles.spacing]}
        >
          <Text style={Styles.text}>🔍</Text>
        </Pressable>
        <Pressable style={[Styles.border, Styles.spacing]}>
          <Text style={Styles.text}>🌐</Text>
        </Pressable>
      </View>
      <Text style={[Styles.smallText, Styles.spacing]}>
        Dostawcą danych pogodowych jest:{" "}
        <OpenURLButton url="https://openweathermap.org/">
          OpenWeatherMap.org
        </OpenURLButton>
      </Text>
      <View>{/* miejsce na ulubione miasta */}</View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#8fe0ff",
  },
  mainText: {
    fontWeight: "700",
    fontSize: 26,
  },
  text: {
    fontWeight: "500",
    fontSize: 20,
  },
  smallText: {
    fontSize: 16,
  },
  color: {
    color: "#ff0",
  },
  border: {
    borderWidth: 2,
    borderColor: "#000",
    backgroundColor: "#75b4e3",
    borderRadius: 4,
  },
  inputItems: {
    flexDirection: "row",
    alignItems: "center",
  },
  spacingInInput: {
    marginRight: 10,
  },
  spacing: {
    padding: 5,
    margin: 5,
  },
});
