import { createSlice } from "@reduxjs/toolkit";
import { fetchParticipants } from "./operations";

const participantsSlice = createSlice({
  name: "participants",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      // fetch events
      .addCase(fetchParticipants.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchParticipants.fulfilled, (state, action) => {
        state.error = null;
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchParticipants.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  fetchingParticipantsInProgress,
  fetchingParticipantsSuccess,
  fetchingParticipantsError,
} = participantsSlice.actions;

export default participantsSlice.reducer;
