import { View, Text, ActivityIndicator, Alert, ScrollView } from "react-native";
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
    <ScrollView style={styles.wrapper}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.weatherWrapper}>
          {data.length > 0 && (
            <>
              <Text style={styles.heading}>Forecast for {city}</Text>
              {filteredForecast().map((item) => {
                return <WeatherListItem key={item.date} data={item} />;
              })}
            </>
          )}
        </View>
      )}
    </ScrollView>
  );
}
