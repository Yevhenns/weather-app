import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;
const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

axios.defaults.baseURL = BASE_URL;

export const search = createAsyncThunk<
  any,
  void,
  {
    rejectValue: string;
  }
>("search", async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get(
      `/forecast.json?q=Dnipropetrovsk&days=3&lang=uk&key=${API_KEY}`
    );
    console.log(res);
    return res;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
