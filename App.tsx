import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Appearance } from "react-native";
import { Menu } from "./src/containers/Menu";
import { Search } from "./src/containers/Search";
import { ThemeSwitcher } from "./src/containers/ThemeSwitcher";
import { darkTheme, lightTheme } from "./src/styles/constants";

export default function App() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  useEffect(() => {
    const colorScheme = Appearance.getColorScheme();
    if (colorScheme === "dark") {
      setCurrentTheme(darkTheme);
    } else {
      setCurrentTheme(lightTheme);
    }
  }, []);

  const toggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    const newTheme = isSwitchOn ? darkTheme : lightTheme;
    setCurrentTheme(newTheme);
  };

  return (
    <View
      style={{
        gap: 10,
        flex: 1,
        backgroundColor: currentTheme.containerBackgroundColor,
        alignItems: "center",
        paddingTop: 50,
      }}
    >
      <ThemeSwitcher isSwitchOn={isSwitchOn} toggleSwitch={toggleSwitch} />
      <Search />
      <Menu />
      <StatusBar style="auto" />
    </View>
  );
}
