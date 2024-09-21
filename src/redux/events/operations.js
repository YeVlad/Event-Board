import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://event-board-b.onrender.com";

export const fetchEvents = createAsyncThunk(
  "events/getAll",
  async ([page, sort], thunkAPI) => {
    try {
      const requestParams = { sortBy: sort };

      const response = await axios.get(`/events/${page}`, {
        params: requestParams,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addEvents = createAsyncThunk(
  "events/addSome",
  async (array, thunkAPI) => {
    try {
      console.log(array);

      const response = await axios.post(`/events`, array);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
