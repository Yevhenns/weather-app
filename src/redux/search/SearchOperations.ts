import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;
const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

export const sendOrder = createAsyncThunk<
  any,
  any,
  {
    rejectValue: string;
  }
>("cart/sendOrder", async (order, { rejectWithValue }) => {
  try {
    const res = await axios.post(`${BASE_URL}send_email`, {
      body: JSON.stringify(order),
    });
    return res.status;
  } catch (error: any) {
    return rejectWithValue(error.message as string);
  }
});
