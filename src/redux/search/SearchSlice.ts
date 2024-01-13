import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { search } from "./SearchOperations";

const initialState = {
  weather: [] as Forecast | [],
  city: "",
  days: 1,
  error: null as any,
  isLoading: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setDays(state, action: { payload: number }) {
      state.days = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(search.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(
        search.fulfilled,
        (state, action: { payload: FilteredResponse }) => {
          if (!action.payload) {
            state.error = true;
            state.isLoading = false;
            return;
          } else {
            state.city = action.payload.location.name;
            const newArray = action.payload.forecast.forecastday.map((item) => {
              return {
                date: item.date.split("-").reverse().join("."),
                avgtemp: item.day.avgtemp_c,
                conditionText: item.day.condition.text,
                icon: item.day.condition.icon,
              };
            });
            state.weather = newArray;
            state.isLoading = false;
          }
        }
      )
      .addCase(search.rejected, (state, action) => {
        console.log("error");
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const searchReducer = searchSlice.reducer;

export const getWeather = (state: RootState) => state.search.weather;
export const getCity = (state: RootState) => state.search.city;
export const getDays = (state: RootState) => state.search.days;
export const getIsLoading = (state: RootState) => state.search.isLoading;

export const { setDays } = searchSlice.actions;
