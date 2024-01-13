import { View, Text, ActivityIndicator } from "react-native";
import { WeatherListItem } from "./WeatherListItem";
import {
  getCity,
  getDays,
  getIsLoading,
  getWeather,
} from "../../redux/search/SearchSlice";
import { useAppSelector } from "../../redux/hooks";
import { styles } from "./WeatherList.styles";

export function WeatherList() {
  const data = useAppSelector(getWeather);
  const city = useAppSelector(getCity);
  const days = useAppSelector(getDays);
  const isLoading = useAppSelector(getIsLoading);

  const filteredForecast = () => {
    const newArr = data.slice();
    return newArr.splice(0, days);
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>Погода в місті {city}</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.weatherWrapper}>
          {filteredForecast().map((item) => {
            return <WeatherListItem key={item.date} data={item} />;
          })}
        </View>
      )}
    </View>
  );
}
