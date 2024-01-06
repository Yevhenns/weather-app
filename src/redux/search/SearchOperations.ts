import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;
const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

export const search = createAsyncThunk<
  any,
  any,
  {
    rejectValue: string;
  }
>("search", async ({ rejectWithValue }) => {
  try {
    const res = await axios(
      `${BASE_URL}forecast.json?q=Dnipropetrovsk&days=7&lang=uk&key=${API_KEY}`
    );
    console.log(res);
    return res;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
