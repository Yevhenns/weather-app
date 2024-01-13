import { View, Text, Image } from "react-native";

import { styles } from "./WeatherListItem.styles";

interface WeatherListItemProps extends Theme {
  data: ForecastDay;
}

export function WeatherListItem({ data, currentTheme }: WeatherListItemProps) {
  const { date, avgtemp, conditionText, icon } = data;

  const uri = "https:" + icon;

  return (
    <View key={date} style={styles.wrapper}>
      <Text style={{ color: currentTheme.textColor }}>{date}</Text>
      <Image source={{ uri: uri }} width={20} height={20} />
      <Text style={{ color: currentTheme.textColor }}>{avgtemp} C°</Text>
      <Text style={{ color: currentTheme.textColor }}>{conditionText}</Text>
    </View>
  );
}
