import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { search } from "./SearchOperations";

const initialState = {
  wrather: [],
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
