import { createSlice } from "@reduxjs/toolkit";
import { fetchEvents } from "./operations";

const eventsSlice = createSlice({
  name: "events",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      // fetch events
      .addCase(fetchEvents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.error = null;
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  fetchingEventsInProgress,
  fetchingEventsSuccess,
  fetchingEventsError,
} = eventsSlice.actions;

export default eventsSlice.reducer;
