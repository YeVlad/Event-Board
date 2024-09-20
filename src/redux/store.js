import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./events/slice.js";
import participantsReducer from "./participants/slice.js";

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    participants: participantsReducer,
  },
});
