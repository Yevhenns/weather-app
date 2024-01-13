import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;
const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

axios.defaults.baseURL = BASE_URL;

export const search = createAsyncThunk<
  FilteredResponse,
  void,
  {
    rejectValue: string;
  }
>("search", async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get(
      `/forecast.json?q=Lviv&days=14&lang=uk&key=${API_KEY}`
    );
    return res.data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
