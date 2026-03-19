// import starFull from "../../public/starFull.png";
// import starEmpty from "../assets/images/starEmpty.png";
import { useContext } from "react";
import { CityContext } from "../contexts/CityContext";
import { Pressable, Image } from "react-native";

const FavouriteButton = () => {
  const { isInFavourite, addToFavourites, removeFromFavourite } =
    useContext(CityContext);
  console.log(isInFavourite);

  return (
    <Pressable
      onPress={() => {
        isInFavourite ? removeFromFavourite() : addToFavourites();
      }}
    >
      <Image
        source={
          isInFavourite
            ? require("../assets/images/starFull.png")
            : require("../assets/images/starEmpty.png")
        }
        className="w-10 h-10"
      ></Image>
    </Pressable>
  );
};

export default FavouriteButton;
