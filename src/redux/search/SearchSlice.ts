import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { search } from "./SearchOperations";

type Weather = {
  date: string;
  avgtemp_c: string;
  conditionText: string;
}[];

const initialState = {
  weather: [] as Weather | [],
  city: "",
  error: null as any,
  isLoading: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(search.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(search.fulfilled, (state, action) => {
        console.log(action.payload);
        if (!action.payload) {
          state.error = true;
          state.isLoading = false;
          return;
        } else {
          state.city = action.payload.location.name;
          const newArray = action.payload.forecast.forecastday.map(
            (item: {
              date: string;
              day: { avgtemp_c: string; condition: { text: string } };
            }) => {
              return {
                date: item.date,
                avgtemp_c: item.day.avgtemp_c,
                conditionText: item.day.condition.text,
              };
            }
          );
          state.weather = newArray;
          state.isLoading = false;
        }
      })
      .addCase(search.rejected, (state, action) => {
        console.log("error");
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const searchReducer = searchSlice.reducer;

export const getWeather = (state: RootState) => state.search.weather;
export const getCity = (state: RootState) => state.search.city;
