import React from "react";
import { View } from "react-native";
import { Button } from "../../components/Button";
import { Entypo, Feather } from "@expo/vector-icons";

type ThemeSwitcherProps = {
  isSwitchOn: boolean;
  toggleSwitch: () => void;
};

export function ThemeSwitcher({
  isSwitchOn,
  toggleSwitch,
}: ThemeSwitcherProps) {
  return (
    <View>
      <Button onPress={toggleSwitch}>
        {isSwitchOn ? (
          <Entypo name={"moon"} size={24} color="black" />
        ) : (
          <Feather name="sun" size={24} color="black" />
        )}
      </Button>
    </View>
  );
}
