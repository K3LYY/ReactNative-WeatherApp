import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
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
