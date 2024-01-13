import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { search } from "./SearchOperations";
import { lightTheme } from "../../styles/constants";

const initialState = {
  weather: [] as Forecast | [],
  days: 1,
  inputCity: "",
  city: "",
  isLightTheme: true,
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
    setInputCity(state, action: { payload: string }) {
      state.inputCity = action.payload;
    },
    toggleTheme(state, action) {
      state.isLightTheme = action.payload;
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
            state.weather = [];
            const newArray = action.payload.forecast.forecastday.map((item) => {
              return {
                date: item.date.split("-").reverse().join("."),
                avgtemp: item.day.avgtemp_c,
                conditionText: item.day.condition.text,
                icon: item.day.condition.icon,
              };
            });
            state.weather = newArray;
            state.city = action.payload.location.name;
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
export const getInputCity = (state: RootState) => state.search.inputCity;
export const getCity = (state: RootState) => state.search.city;
export const getDays = (state: RootState) => state.search.days;
export const getIsLightTheme = (state: RootState) => state.search.isLightTheme;
export const getIsLoading = (state: RootState) => state.search.isLoading;
export const getError = (state: RootState) => state.search.error;

export const { setDays } = searchSlice.actions;
export const { setInputCity } = searchSlice.actions;
export const { toggleTheme } = searchSlice.actions;
