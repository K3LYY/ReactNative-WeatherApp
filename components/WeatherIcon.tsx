import { Image } from "react-native";

interface IWwatherIcon {
  iconId: string;
}

const WeatherIcon = ({ iconId }: IWwatherIcon) => {
  return (
    <Image
      source={{
        uri: `https://openweathermap.org/payload/api/media/file/${iconId}.png`,
      }}
      className="w-50 h-50 center"
    ></Image>
  );
};

export default WeatherIcon;
