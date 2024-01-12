import { View, Text, Image } from "react-native";

import { styles } from "./WeatherListItem.styles";

interface WeatherListItemProps {
  data: ForecastDay;
}

export function WeatherListItem({ data }: WeatherListItemProps) {
  const { date, avgtemp, conditionText, icon } = data;

  const uri = "https:" + icon;

  return (
    <View key={date} style={styles.wrapper}>
      <Text>{date}:</Text>
      <Image source={{ uri: uri }} width={20} height={20} />
      <Text>{avgtemp} C°</Text>
      <Text>{conditionText}</Text>
    </View>
  );
}
