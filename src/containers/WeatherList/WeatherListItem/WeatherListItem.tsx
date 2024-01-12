import { View, Text, Image } from "react-native";

import { styles } from "./WeatherListItem.styles";

export function WeatherListItem({ data }) {
  return (
    <View key={data.date} style={styles.wrapper}>
      <Text>{data.date}:</Text>
      <Text>{data.avgtemp_c} C°</Text>
      <Text>{data.conditionText}</Text>
    </View>
  );
}
