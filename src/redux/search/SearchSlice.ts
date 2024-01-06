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
    builder.addCase(search.pending, (state) => {
      state.isLoading = true;
    }),
});

export const searchReducer = searchSlice.reducer;
