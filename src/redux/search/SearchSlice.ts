import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { search } from "./SearchOperations";

const initialState = {
  weather: [],
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
          state.weather = action.payload;
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
