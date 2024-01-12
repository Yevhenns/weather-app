import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { search } from "./SearchOperations";

const initialState = {
  weather: [] as Forecast | [],
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
        if (!action.payload) {
          state.error = true;
          state.isLoading = false;
          return;
        } else {
          state.city = action.payload.location.name;
          const newArray = action.payload.forecast.forecastday.map((item) => {
            return {
              date: item.date,
              avgtemp: item.day.avgtemp_c,
              conditionText: item.day.condition.text,
              icon: item.day.condition.icon,
            };
          });
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
