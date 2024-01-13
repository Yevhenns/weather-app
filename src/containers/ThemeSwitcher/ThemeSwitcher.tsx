import { View } from "react-native";
import { Button } from "../../components/Button";
import { Entypo, Feather } from "@expo/vector-icons";

type ThemeSwitcherProps = {
  isLightTheme: boolean;
  toggleSwitch: () => void;
};

export function ThemeSwitcher({
  toggleSwitch,
  isLightTheme,
}: ThemeSwitcherProps) {
  return (
    <View>
      <Button onPress={toggleSwitch}>
        {isLightTheme ? (
          <Entypo name={"moon"} size={24} color="black" />
        ) : (
          <Feather name="sun" size={24} color="black" />
        )}
      </Button>
    </View>
  );
}
