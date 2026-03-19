import { Stack } from "expo-router";
import { CityProvider } from "@/contexts/CityContext";

export default function RootLayout() {
  return (
    <CityProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </CityProvider>
  );
}
