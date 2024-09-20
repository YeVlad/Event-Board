import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://event-board-b.onrender.com";

export const fetchEvents = createAsyncThunk(
  "events/getAll",
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/events/${page}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
