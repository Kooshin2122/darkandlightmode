import { ThemeProvider } from "@/context/ThemeProvider";
import "../global.css";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native";

export default function Layout() {
  return (
    <ThemeProvider>
      <Slot />
    </ThemeProvider>
  );
}
