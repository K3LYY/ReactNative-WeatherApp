import { Image } from "react-native";
import { Styles } from "@/styles/Styles";

interface IWwatherIcon {
  iconId: string;
}

const WeatherIcon = ({ iconId }: IWwatherIcon) => {
  return (
    <Image
      source={{
        uri: `https://openweathermap.org/payload/api/media/file/${iconId}.png`,
      }}
      style={Styles.bigLogo}
      className="w-50 h-50 center"
    ></Image>
  );
};

export default WeatherIcon;
