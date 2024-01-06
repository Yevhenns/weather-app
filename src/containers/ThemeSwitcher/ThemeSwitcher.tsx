import React from "react";
import { View } from "react-native";
import { Button } from "../../components/Button";
import { Entypo, Feather } from "@expo/vector-icons";

export function ThemeSwitcher() {
  return (
    <View>
      <Button>
        <Entypo name="moon" size={24} color="black" />
      </Button>
      <Button>
        <Feather name="sun" size={24} color="black" />
      </Button>
    </View>
  );
}
