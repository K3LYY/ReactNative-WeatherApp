import { useContext } from "react";
import { useRouter } from "expo-router";
import { CityContext } from "../contexts/CityContext";
import { View, Text, Pressable, FlatList } from "react-native";

type TCityData = {
  city: string;
  lon: string;
  lat: string;
};

type ItemProps = { fav: TCityData };
const FavoritesList = () => {
  const { favourites, setCityData } = useContext(CityContext);
  const router = useRouter();

  const Item = ({ fav }: ItemProps) => (
    <View className="max-w-3xl w-full">
      <Pressable
        className="w-full h-full"
        onPress={() => {
          setCityData(fav);
          router.navigate("/(tabs)/weather");
        }}
      >
        <Text>{fav.city}</Text>
      </Pressable>
    </View>
  );

  if (favourites.length === 0) {
    return null;
  }
  return (
    <View>
      <Text>Ulubione miasta</Text>
      <FlatList
        data={favourites}
        renderItem={({ item }) => <Item fav={item} />}
      />
    </View>
  );
};

export default FavoritesList;
