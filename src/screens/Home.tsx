import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Appearance } from "react-native";
import { Menu } from "../containers/Menu";
import { Search } from "../containers/Search";
import { ThemeSwitcher } from "../containers/ThemeSwitcher";
import { darkTheme, lightTheme } from "../styles/constants";
import { WeatherList } from "../containers/WeatherList";
import { useAppDispatch } from "../redux/hooks";
import { search } from "../redux/search/SearchOperations";

export default function Home() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  // const dispatch = useAppDispatch();

  useEffect(() => {
    const colorScheme = Appearance.getColorScheme();
    if (colorScheme === "dark") {
      setCurrentTheme(darkTheme);
    } else {
      setCurrentTheme(lightTheme);
    }
  }, []);

  // useEffect(() => {
  //   dispatch(search());
  // }, []);

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
      <WeatherList />
      <StatusBar style="auto" />
    </View>
  );
}
