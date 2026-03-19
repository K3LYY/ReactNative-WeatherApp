import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Tabs } from "expo-router";
import { Styles } from "@/styles/Styles";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? Styles.lightTextColor : Styles.darkTextColor;
  const secondThemeContainerStyle =
    colorScheme === "light"
      ? Styles.secondLightContainerColor
      : Styles.secondDarkContainerColor;
  const themeContainerStyle =
    colorScheme === "light"
      ? Styles.lightContainerColor
      : Styles.darkContainerColor;
  const themeBorderStyle =
    colorScheme === "light" ? Styles.lightBorder : Styles.darkBorder;

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: secondThemeContainerStyle.backgroundColor,
        },
        headerTintColor: themeTextStyle.color,
        tabBarStyle: {
          backgroundColor: secondThemeContainerStyle.backgroundColor,
          borderTopColor: themeBorderStyle.borderColor,
          borderTopWidth: 1,
        },
        tabBarActiveTintColor: themeTextStyle.color,
        tabBarInactiveTintColor: colorScheme === "light" ? "#666" : "#ccc",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Strona główna",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={24} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="weather"
        options={{
          title: "Prognoza pogody",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={24} name="cloud" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="air-quality"
        options={{
          title: "Jakość powietrza",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="wind" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
