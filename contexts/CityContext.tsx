import { createContext, useState, useEffect } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ICityContext {
  children: ReactNode;
}

type TCityData = {
  city: string;
  lon: string;
  lat: string;
};

export const CityContext = createContext<{
  city: string;
  lon: string;
  lat: string;
  setCityData: Dispatch<SetStateAction<TCityData>>;
  favourites: TCityData[];
  setFavourites: Dispatch<SetStateAction<TCityData[]>>;
  isInFavourite: boolean;
  addToFavourites: () => void;
  removeFromFavourite: () => void;
}>({
  city: "Warszawa",
  lon: "21.0067249",
  lat: "52.2319581",
  setCityData: () => {},
  favourites: [],
  setFavourites: () => {},
  isInFavourite: false,
  addToFavourites: () => {},
  removeFromFavourite: () => {},
});

export const CityProvider = ({ children }: ICityContext) => {
  const [cityData, setCityData] = useState({
    city: "Warszawa",
    lon: "21.0067249",
    lat: "52.2319581",
  });
  const [favourites, setFavourites] = useState<TCityData[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const city = (await AsyncStorage.getItem("city")) ?? "Warszawa";
        const lon = (await AsyncStorage.getItem("lon")) ?? "21.0067249";
        const lat = (await AsyncStorage.getItem("lat")) ?? "52.2319581";
        setCityData({ city, lon, lat });

        const favs = await AsyncStorage.getItem("favourites");
        if (favs) {
          try {
            setFavourites(JSON.parse(favs));
          } catch (parseError) {
            console.error("Error parsing favourites:", parseError);
            setFavourites([]);
            await AsyncStorage.removeItem("favourites");
          }
        }
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setIsLoaded(true);
      }
    };
    loadData();
  }, []);
  const isInFavourite = !!favourites.filter(
    (favCity: TCityData) => favCity.city === cityData.city,
  ).length;

  const addToFavourites = () => {
    setFavourites((prev: TCityData[]) => {
      const exists = prev.some(
        (favCity: TCityData) => favCity.city === cityData.city,
      );
      if (exists) return prev;
      return [...prev, cityData];
    });
  };

  const removeFromFavourite = () => {
    setFavourites((prev: TCityData[]) =>
      prev.filter((favCity: TCityData) => favCity.city !== cityData.city),
    );
  };

  useEffect(() => {
    const saveCityData = async () => {
      try {
        await AsyncStorage.setItem("city", cityData.city);
        await AsyncStorage.setItem("lon", cityData.lon.toString());
        await AsyncStorage.setItem("lat", cityData.lat.toString());
      } catch (error) {
        console.error(error);
      }
    };
    saveCityData();
  }, [cityData]);

  useEffect(() => {
    const saveFavourites = async () => {
      if (!isLoaded) return;
      try {
        await AsyncStorage.setItem("favourites", JSON.stringify(favourites));
      } catch (error) {
        console.error("Error saving favourites:", error);
      }
    };
    saveFavourites();
  }, [favourites, isLoaded]);

  return (
    <CityContext
      value={{
        ...cityData,
        setCityData,
        favourites,
        setFavourites,
        isInFavourite,
        addToFavourites,
        removeFromFavourite,
      }}
    >
      {children}
    </CityContext>
  );
};
