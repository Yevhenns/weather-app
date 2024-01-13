import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Menu } from "../../containers/Menu";
import { Search } from "../../containers/Search";
import { ThemeSwitcher } from "../../containers/ThemeSwitcher";
import { darkTheme, lightTheme } from "../../styles/constants";
import { WeatherList } from "../../containers/WeatherList";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getIsLightTheme, toggleTheme } from "../../redux/search/SearchSlice";

export function HomeScreen() {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const isLightTheme = useAppSelector(getIsLightTheme);
  const dispatch = useAppDispatch();

  const toggleSwitch = () => {
    dispatch(toggleTheme(!isLightTheme));
  };

  useEffect(() => {
    if (isLightTheme) {
      setCurrentTheme(lightTheme);
    } else {
      setCurrentTheme(darkTheme);
    }
  }, [isLightTheme]);

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
      <ThemeSwitcher toggleSwitch={toggleSwitch} isLightTheme={isLightTheme} />
      <Search />
      <Menu />
      <WeatherList currentTheme={currentTheme} />
      <StatusBar style="auto" />
    </View>
  );
}
