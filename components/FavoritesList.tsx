import { useContext } from "react";
import { useRouter } from "expo-router";
import { CityContext } from "../contexts/CityContext";
import { View, Text, Pressable, FlatList, useColorScheme } from "react-native";
import { Styles } from "@/styles/Styles";

type TCityData = {
  city: string;
  lon: string;
  lat: string;
};

type ItemProps = { fav: TCityData };
const FavoritesList = () => {
  const { favourites, setCityData } = useContext(CityContext);
  const router = useRouter();
  const colorScheme = useColorScheme();
  const themeBorderStyle =
    colorScheme === "light" ? Styles.lightBorder : Styles.darkBorder;
  const themeTextStyle =
    colorScheme === "light" ? Styles.lightTextColor : Styles.darkTextColor;
  const themeContainerStyle =
    colorScheme === "light"
      ? Styles.secondLightContainerColor
      : Styles.secondDarkContainerColor;

  const Item = ({ fav }: ItemProps) => (
    <View
      style={[
        themeBorderStyle,
        Styles.spacing,
        themeContainerStyle,
        { alignItems: "center" },
      ]}
    >
      <Pressable
        className="w-full h-full"
        onPress={() => {
          setCityData(fav);
          router.navigate("/(tabs)/weather");
        }}
      >
        <Text style={[Styles.text, themeTextStyle]}>{fav.city}</Text>
      </Pressable>
    </View>
  );

  if (favourites.length === 0) {
    return null;
  }

  return (
    <View style={[Styles.container, Styles.spacing]}>
      <Text style={[Styles.mainText, themeTextStyle]}>Ulubione miasta</Text>
      <FlatList
        data={favourites}
        renderItem={({ item }) => <Item fav={item} />}
      />
    </View>
  );
};

export default FavoritesList;
