import { View, Text } from "react-native";
import { getCity, getWeather } from "../../redux/search/SearchSlice";
import { useAppSelector } from "../../redux/hooks";
import { styles } from "./WeatherList.styles";
import { WeatherListItem } from "./WeatherListItem/WeatherListItem";

export function WeatherList() {
  const data = useAppSelector(getWeather);
  const city = useAppSelector(getCity);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>Погода в місті {city}</Text>
      {data.map((item) => {
        return <WeatherListItem key={item.date} data={item} />;
      })}
    </View>
  );
}
