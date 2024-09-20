import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://event-board-b.onrender.com";

export const createParticipant = createAsyncThunk(
  "particiant/createOne",
  async (objOfData, thunkAPI) => {
    try {
      console.log(objOfData);

      const response = await axios.put("/participant", objOfData);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchParticipants = createAsyncThunk(
  "participants/get",
  async (id, thunkAPI) => {
    try {
      console.log(id);

      const response = await axios.get("/participant", id);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
