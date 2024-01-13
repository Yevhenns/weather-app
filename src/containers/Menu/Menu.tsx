import React from "react";
import { View, Text } from "react-native";
import { Button } from "../../components/Button";
import { styles } from "./Menu.styles";
import { useAppDispatch } from "../../redux/hooks";
import { setDays } from "../../redux/search/SearchSlice";

export function Menu() {
  const dispatch = useAppDispatch();

  const setDaysAmount = (days: number) => {
    dispatch(setDays(days));
  };

  return (
    <View style={styles.container}>
      <Button onPress={() => setDaysAmount(1)}>
        <Text>Сьогодні</Text>
      </Button>
      <Button onPress={() => setDaysAmount(3)}>
        <Text>3 дні</Text>
      </Button>
      <Button onPress={() => setDaysAmount(7)}>
        <Text>7 днів</Text>
      </Button>
      <Button onPress={() => setDaysAmount(14)}>
        <Text>14 днів</Text>
      </Button>
    </View>
  );
}
